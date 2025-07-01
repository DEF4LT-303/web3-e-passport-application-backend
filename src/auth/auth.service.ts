import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon2 from '@node-rs/argon2';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from 'src/database/database.service';
import { UsersService } from 'src/users/users.service';
import { AuthPayloadDto } from './dto/auth.dto';

// auth.service.ts
@Injectable()
export class AuthService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) { }

  async validateUser(authPayloadDto: AuthPayloadDto) {
    const { email, password } = authPayloadDto;

    const user = await this.databaseService.user.findUnique({
      where: { email },
    });

    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  async login(user: { id: string; email: string, role: string }) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    const { accessToken, refreshToken } = await this.generateTokens(payload);

    // Hash before storing
    // const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    const hashedRefreshToken = await argon2.hash(refreshToken);

    await this.userService.update(user.id, {
      refreshToken: hashedRefreshToken,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }

  async generateTokens(payload: { sub: string; email: string, role: string }) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
      }),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(user: { id: string; email: string, role: string }) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    const { accessToken, refreshToken } = await this.generateTokens(payload);

    // Hash before storing
    // const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    const hashedRefreshToken = await argon2.hash(refreshToken);

    await this.userService.update(user.id, {
      refreshToken: hashedRefreshToken,
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    };
  }

  async validateRefreshToken(userId: string, refreshToken: string) {
    const user = await this.userService.findOne(userId);

    if (!user || !user.refreshToken) throw new UnauthorizedException('Invalid refresh token');

    // const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
    const isValid = await argon2.verify(user.refreshToken, refreshToken);
    if (!isValid) throw new UnauthorizedException('Invalid refresh token');

    return {
      id: user.id,
      email: user.email,
      role: user.role
    };
  }

  async signOut(userId: string) {
    await this.userService.update(userId, {
      refreshToken: null,
    });
    return { message: 'User signed out successfully' };
  }
}

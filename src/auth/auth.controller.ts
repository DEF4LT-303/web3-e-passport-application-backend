import { Body, Controller, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { RefreshGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Req() req: Request) {
    return this.authService.login(req.user as any);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);
      return this.authService.login(user);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new HttpException(
            'Email already exists',
            HttpStatus.CONFLICT
          );
        }
      }
      throw error;
    }
  }

  @Post('refresh')
  @UseGuards(RefreshGuard)
  async refreshToken(@Req() req: Request) {
    return this.authService.refreshToken(req.user as any);
  }
}

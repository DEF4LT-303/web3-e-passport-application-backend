import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh-jwt') {
  constructor(
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refresh_token'),
      ignoreExpiration: false,
      passReqToCallback: true,
      secretOrKey: process.env.JWT_REFRESH_SECRET || 'default',
    })
  }

  validate(req: Request, payload: any) {
    const refreshToken = req.body.refresh_token;
    const userId = payload.sub;

    return this.authService.validateRefreshToken(userId, refreshToken)
  }
}
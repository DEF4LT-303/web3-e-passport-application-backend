import { UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";

export class localStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const jwtToken = await this.authService.validateUser({ email, password });

    if (!jwtToken) {
      throw new UnauthorizedException;
    }

    return jwtToken;
  }
}
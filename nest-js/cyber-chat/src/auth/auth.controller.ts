import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request as ExpressRequest } from "express';
import {LoginDto} from "./LoginDto"

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local")) // uses local strategy to append user to request
  @Post("login")
  login(@Request() request: ExpressRequest & {user: ValidateUser}, @Body() _loginDto: LoginDto): {access_token} {
    return this.authService.login(request.user);
  }
}

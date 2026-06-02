import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Request as ExpressRequest } from 'express';
import { LoginDto } from './LoginDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // uses local strategy to append user to request
  @Post('login')
  login(@Request() request: any, @Body() _loginDto: LoginDto) {
    return this.authService.login(request.user);
  }
}

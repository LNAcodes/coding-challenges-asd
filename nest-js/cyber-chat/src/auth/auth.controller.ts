import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './LoginDto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

type AuthenticatedRequest = Request & {
  user: { id: string; username: string };
};
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('local')) // uses local strategy to append user to request
  @Post('login')
  login(@Request() request: AuthenticatedRequest, @Body() _loginDto: LoginDto) {
    return this.authService.login(request.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  me(@Request() request: AuthenticatedRequest) {
    return request.user;
  }
}

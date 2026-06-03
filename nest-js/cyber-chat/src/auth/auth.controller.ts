import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './login.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Public } from '../common/decorators/public.decorator';
import type { AuthenticatedRequest } from '../common/types/authenticated-request.type';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register as user' })
  @ApiCreatedResponse({ description: 'User successfully registered' })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  @ApiConflictResponse({ description: 'Username already exists' })
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Login as user' })
  @ApiOkResponse({ description: 'Returns JWT access token' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  login(@Req() request: AuthenticatedRequest, @Body() _loginDto: LoginDto) {
    return this.authService.login(request.user);
  }

  //@UseGuards(AuthGuard('jwt'))replaced by APP_GUARD + JWTAuthGuard in AppModule.ts
  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user' })
  @ApiOkResponse({ description: 'Returns current authenticated user' })
  @ApiUnauthorizedResponse({ description: 'No valid JWT token provided' })
  me(@Req() request: AuthenticatedRequest) {
    return request.user;
  }
}

import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './LoginDto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Public } from '../common/decorators/public.decorator';
import type { AuthenticatedRequest } from '../common/types/authenticated-request.type';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Register as user' })
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Public()
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: 'Login as user' })
  login(@Req() request: AuthenticatedRequest, @Body() _loginDto: LoginDto) {
    return this.authService.login(request.user);
  }

  //@UseGuards(AuthGuard('jwt'))replaced by APP_GUARD + JWTAuthGuard in AppModule.ts
  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get current authenticated user' })
  me(@Req() request: AuthenticatedRequest) {
    return request.user;
  }
}

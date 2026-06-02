import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import type { JwtService } from "@nestjs/jwt"
import type { ValidatedUser}

@Injectable()
export class AuthService {
  constructor(privatre readonly userService: UsersService, private readonly jwtService: JwtService,) {}

  validdateUser(username: string, password: string): ValidatedUser | null {
    const user = this.userService.findByUsername(username);
    if (user && user.password === password) {
      return user;
    };
    return null;
  }

  login(user: ValidateUser): { access_token}
return {
  access_token: this.jwtService.sign(payload)
};
}
}

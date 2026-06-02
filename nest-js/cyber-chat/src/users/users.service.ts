import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async findByUsername(username: string) {
    return this.users.findOneBy({ username });
  }

  async createUser(dto: CreateUserDto) {
    const existingUser = await this.users.findOneBy({ username: dto.username });
    if (existingUser) {
      throw new ConflictException('Username already exists');
    }
    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = this.users.create({ username: dto.username, passwordHash });
    return this.users.save(user);
  }
}

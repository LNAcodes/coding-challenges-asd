import { Exclude, Expose } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Expose()
  userId: string;

  @Column({ unique: true })
  @Expose()
  username: string;

  @Column({ type: 'simple-array', default: 'user' })
  @Expose()
  roles: string[];

  @Column()
  @Exclude()
  passwordHash: string;

  @Column()
  @Exclude()
  jwtSalt: string;
}

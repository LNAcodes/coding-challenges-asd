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

  @Column()
  @Exclude()
  passwordHash: string;
}

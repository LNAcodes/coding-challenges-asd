import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Comment } from '../comments/comment.entity';

@Entity('threads')
export class Thread {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @Column({ type: 'text' })
  body!: string;

  @Column({ type: 'varchar', length: 100 })
  author!: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt!: Date;

  @OneToMany(() => Comment, (comment) => comment.thread)
  comments!: Comment[];
}

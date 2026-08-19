import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { Thread } from '../threads/thread.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'varchar', length: 100 })
  author: string;

  @CreateDateColumn({ type: 'datetime' })
  createdAt: Date;

  // I as a comment belong to one thread
  @ManyToOne(() => Thread, (thread) => thread.comments)
  thread: Thread;
}

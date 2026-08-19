import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Thread } from './threads/thread.entity';
import { Comment } from './comments/comment.entity';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: 'database/cyberchat.sqlite',
  entities: [Thread, Comment],
  migrations: ['src/migrations/*.ts'],
  synchronize: false, // Absolutely critical to disable this here
});

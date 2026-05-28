import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thread } from './thread.entity';
import { Comment } from '../comments/comment.entity';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Thread, Comment])],
  controllers: [ThreadsController],
  providers: [ThreadsService],
})
export class ThreadsModule {}

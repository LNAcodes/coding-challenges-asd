import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thread } from './thread.entity';
import { CreateThreadDto } from './dto/create-thread.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { Comment } from '../comments/comment.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private readonly threads: Repository<Thread>,

    @InjectRepository(Comment)
    private readonly comments: Repository<Comment>,
  ) {}

  async findAll(): Promise<Thread[]> {
    return this.threads.find();
  }

  async findOne(id: string): Promise<Thread> {
    const thread = await this.threads.findOne({
      where: { id },
      relations: { comments: true },
    });

    if (!thread) {
      throw new NotFoundException(`Thread with ID ${id} not found`);
    }
    return thread;
  }

  async create(createThreadDto: CreateThreadDto): Promise<Thread> {
    const thread = this.threads.create(createThreadDto);
    return this.threads.save(thread);
  }

  async addComment(
    threadId: string,
    createCommentDto: CreateCommentDto,
  ): Promise<Comment> {
    const thread = await this.findOne(threadId);
    const comment = this.comments.create({ ...createCommentDto, thread });
    return this.comments.save(comment);
  }

  async delete(id: string): Promise<void> {
    await this.findOne(id);
    await this.threads.delete(id);
  }
}

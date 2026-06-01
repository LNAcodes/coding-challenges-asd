import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Thread } from './thread.entity';
import { CreateThreadDto } from './dto/create-thread.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { Comment } from '../comments/comment.entity';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { ThreadResponseDto } from './dto/thread-response.dto';
import { plainToInstance } from 'class-transformer';
import { CommentResponseDto } from '../comments/dto/comment-response.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private readonly threads: Repository<Thread>,

    @InjectRepository(Comment)
    private readonly comments: Repository<Comment>,
  ) {}

  private async findOneEntity(id: string): Promise<Thread> {
    const thread = await this.threads.findOne({
      where: { id },
      relations: { comments: true },
    });
    if (!thread) {
      throw new NotFoundException(`Thread with Id ${id} not found`);
    }
    return thread;
  }

  async findAll(paginationQueryDto: PaginationQueryDto): Promise<{
    data: ThreadResponseDto[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  }> {
    const { page, limit } = paginationQueryDto;
    const [allThreads, total] = await this.threads.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    const data = allThreads.map((thread) =>
      plainToInstance(ThreadResponseDto, thread, {
        excludeExtraneousValues: true,
      }),
    );

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOne(id: string): Promise<ThreadResponseDto> {
    const thread = await this.findOneEntity(id);
    return plainToInstance(ThreadResponseDto, thread, {
      excludeExtraneousValues: true,
    });
  }

  async create(createThreadDto: CreateThreadDto): Promise<ThreadResponseDto> {
    const thread = this.threads.create(createThreadDto);
    const savedThread = await this.threads.save(thread);
    return plainToInstance(ThreadResponseDto, savedThread, {
      excludeExtraneousValues: true,
    });
  }

  async addComment(
    threadId: string,
    createCommentDto: CreateCommentDto,
  ): Promise<CommentResponseDto> {
    const thread = await this.findOneEntity(threadId);
    const comment = this.comments.create({ ...createCommentDto, thread });
    const savedComment = await this.comments.save(comment);
    return plainToInstance(CommentResponseDto, savedComment, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: string, dto: UpdateThreadDto): Promise<ThreadResponseDto> {
    const thread = await this.findOneEntity(id);
    Object.assign(thread, dto);
    const savedThread = await this.threads.save(thread);
    return plainToInstance(ThreadResponseDto, savedThread, {
      excludeExtraneousValues: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.findOne(id);
    await this.threads.delete(id);
  }
}

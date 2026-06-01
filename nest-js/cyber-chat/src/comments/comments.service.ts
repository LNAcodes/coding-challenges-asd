import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { plainToInstance } from 'class-transformer';
import { CommentResponseDto } from './dto/comment-response.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly comments: Repository<Comment>,
  ) {}

  private async findOneEntity(id: string): Promise<Comment> {
    const comment = await this.comments.findOne({
      where: { id },
    });
    if (!comment) {
      throw new NotFoundException(`Comment with Id ${id} not found`);
    }
    return comment;
  }

  async findOne(id: string): Promise<CommentResponseDto> {
    const comment = await this.findOneEntity(id);
    return plainToInstance(CommentResponseDto, comment, {
      excludeExtraneousValues: true,
    });
  }

  async softDelete(id: string): Promise<void> {
    await this.findOneEntity(id);
    await this.comments.update(id, { body: 'deleted' });
  }
}

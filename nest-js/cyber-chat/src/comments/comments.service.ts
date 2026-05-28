import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly comments: Repository<Comment>,
  ) {}

  async findOne(id: string): Promise<Comment> {
    const comment = await this.comments.findOne({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  async softDelete(id: string): Promise<void> {
    await this.findOne(id);
    await this.comments.update(id, { body: 'deleted' });
  }
}

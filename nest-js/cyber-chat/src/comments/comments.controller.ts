import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.commentsService.softDelete(id);
  }
}

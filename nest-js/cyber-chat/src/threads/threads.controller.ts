import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { ThreadsService } from './threads.service';

@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) {}

  @Get()
  findAll() {
    return this.threadsService.findAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.threadsService.findOne(id);
  }

  @Post()
  create(@Body() createThreadDto: CreateThreadDto) {
    return this.threadsService.create(createThreadDto);
  }

  @Post(':id/comments')
  addComment(
    @Param('id') threadId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.threadsService.addComment(threadId, createCommentDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateThreadDto: UpdateThreadDto,
  ) {
    return this.threadsService.update(id, updateThreadDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.threadsService.delete(id);
  }
}

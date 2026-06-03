import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Patch,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
  Req,
} from '@nestjs/common';
import { CreateThreadDto } from './dto/create-thread.dto';
import { UpdateThreadDto } from './dto/update-thread.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { ThreadsService } from './threads.service';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import type { AuthenticatedRequest } from '../common/types/authenticated-request.type';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('threads')
export class ThreadsController {
  constructor(private readonly threadsService: ThreadsService) {}

  @Get()
  @ApiOperation({ summary: 'List all threads with pagination' })
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.threadsService.findAll(paginationQueryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one thread with comment(s)' })
  FindOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.threadsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a thread with title and body' })
  create(
    @Req() request: AuthenticatedRequest,
    @Body() createThreadDto: CreateThreadDto,
  ) {
    return this.threadsService.create(createThreadDto, request.user.username);
  }

  @Post(':id/comments')
  @ApiOperation({ summary: 'Add a comment to thread' })
  addComment(
    @Req() request: AuthenticatedRequest,
    @Param('id', ParseUUIDPipe) threadId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.threadsService.addComment(
      threadId,
      createCommentDto,
      request.user.username,
    );
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a thread partially' })
  update(
    @Req() request: AuthenticatedRequest,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateThreadDto: UpdateThreadDto,
  ) {
    return this.threadsService.update(
      id,
      updateThreadDto,
      request.user.username,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete thread with comment(s)' })
  delete(
    @Req() request: AuthenticatedRequest,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.threadsService.delete(id, request.user.username);
  }
}

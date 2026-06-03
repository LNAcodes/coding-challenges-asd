import {
  Controller,
  Get,
  Delete,
  Param,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import type { AuthenticatedRequest } from '../common/types/authenticated-request.type';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Show one comment' })
  @ApiOkResponse({ description: 'Returns comment' })
  @ApiNotFoundResponse({ description: 'Comment not found' })
  @ApiUnauthorizedResponse({ description: 'No valid JWT token' })
  FindOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commentsService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Soft delete a comment',
  })
  @ApiNotFoundResponse({ description: 'Comment not found' })
  @ApiUnauthorizedResponse({ description: 'No valid JWT token' })
  @ApiForbiddenResponse({
    description: 'You can only delete your own comments',
  })
  delete(
    @Req() request: AuthenticatedRequest,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.commentsService.softDelete(id, request.user.username);
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import { Comment } from './comment.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const mockCommentRepository = {
  findOne: vi.fn(),
  update: vi.fn(),
};

describe('CommentsService', () => {
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentsService,
        {
          provide: getRepositoryToken(Comment),
          useValue: mockCommentRepository,
        },
      ],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

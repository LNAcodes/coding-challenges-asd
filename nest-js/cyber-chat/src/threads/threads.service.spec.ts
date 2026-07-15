import { Test, TestingModule } from '@nestjs/testing';
import { ThreadsService } from './threads.service';
import { describe, beforeEach, it, expect, vi } from 'vitest';
import { Thread } from './thread.entity';
import { Comment } from '../comments/comment.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

const mockThreadRepository = {
  findOne: vi.fn(),
  findAndCount: vi.fn(),
  create: vi.fn(),
  save: vi.fn(),
  delete: vi.fn(),
};

const mockCommentRepository = {
  create: vi.fn(),
  save: vi.fn(),
};

describe('ThreadsService', () => {
  let service: ThreadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ThreadsService,
        {
          provide: getRepositoryToken(Thread),
          useValue: mockThreadRepository,
        },
        {
          provide: getRepositoryToken(Comment),
          useValue: mockCommentRepository,
        },
      ],
    }).compile();

    service = module.get<ThreadsService>(ThreadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll returns an array of threads with pagination meta', async () => {
    const fakeThreads = [
      { id: '1', title: 'First Thread-Test' },
      { id: '2', title: 'Second Thread-Test' },
    ];
    mockThreadRepository.findAndCount.mockResolvedValue([fakeThreads, 2]);

    const result = await service.findAll({ page: 1, limit: 10 });

    expect(mockThreadRepository.findAndCount).toHaveBeenCalledWith({
      skip: 0,
      take: 10,
    });
    expect(result.data).toHaveLength(2);
    expect(result.meta.total).toBe(2);
  });

  it('findOne returns the correct thread for a valid ID', async () => {
    const fakeThread = { id: '1', title: 'First Thread-Test' };
    mockThreadRepository.findOne.mockResolvedValue(fakeThread);

    const result = await service.findOne('1');

    expect(mockThreadRepository.findOne).toHaveBeenCalledWith({
      where: { id: '1' },
      relations: { comments: true },
    });
    expect(result.title).toBe('First Thread-Test');
  });

  it('findOne throws NotFoundException for an invalid ID', async () => {
    mockThreadRepository.findOne.mockResolvedValue(null);

    await expect(service.findOne('19827')).rejects.toThrow(NotFoundException);
  });

  it('create passes DTO and author to save, and returns the new thread', async () => {
    // Arrange
    const dto = { title: 'Test Thread', body: 'blabla Content' };
    const author = "Meta's Marc";
    const createdEntity = { ...dto, author };
    const savedThread = { id: '5', ...createdEntity };
    mockThreadRepository.create.mockReturnValue(createdEntity);
    mockThreadRepository.save.mockResolvedValue(savedThread);

    // Act
    const result = await service.create(dto as any, author);

    //Assert
    expect(mockThreadRepository.save).toHaveBeenCalledWith(createdEntity);
    expect(result.title).toBe('Test Thread');
  });
});

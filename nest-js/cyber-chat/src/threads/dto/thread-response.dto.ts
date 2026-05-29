import { Expose, Type } from 'class-transformer';
import { CreateDateColumn } from 'typeorm';

export class ThreadResponseDto {
  @Expose()
  id!: string;

  @Expose()
  title!: string;

  @Expose()
  body!: string;

  @Expose()
  author!: string;

  @Expose()
  @Type(() => Date)
  createdAt!: Date;
}

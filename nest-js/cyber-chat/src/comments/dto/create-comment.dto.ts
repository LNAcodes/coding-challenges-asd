import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  body!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  author!: string;
}

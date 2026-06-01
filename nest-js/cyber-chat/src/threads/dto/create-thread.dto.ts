import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateThreadDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  body: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  author: string;
}

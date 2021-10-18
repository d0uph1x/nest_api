import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @MaxLength(10)
  name: string;
}

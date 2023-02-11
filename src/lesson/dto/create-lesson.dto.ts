import { IsNotEmpty, IsString } from 'class-validator';
import { ArgsType, Field, ID } from '@nestjs/graphql';
import { Schema } from 'mongoose';

@ArgsType()
export class CreateLessonDto {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  startDate: string;

  @Field()
  @IsNotEmpty()
  endDate: string;

  @IsString({ each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: Schema.Types.ObjectId[];
}

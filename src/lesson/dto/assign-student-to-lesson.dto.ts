import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Schema } from 'mongoose';

@ArgsType()
export class AssignStudentToLessonDto {
  @IsNotEmpty()
  @Field(() => ID)
  lessonId: Schema.Types.ObjectId[];

  @IsNotEmpty()
  @Field(() => [ID])
  studentIds: Schema.Types.ObjectId[];
}

import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Schema } from 'mongoose';
import { StudentType } from 'src/students/types/student.type';

@ObjectType('LessonType')
export class LessonType {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [StudentType])
  students: string[];
}

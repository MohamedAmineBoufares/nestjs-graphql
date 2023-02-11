import { Field, ObjectType } from '@nestjs/graphql';

import { Schema } from 'mongoose';

@ObjectType('LessonType')
export class LessonType {
  @Field(() => String)
  _id: Schema.Types.ObjectId;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}

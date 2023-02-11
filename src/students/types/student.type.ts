import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Schema } from 'mongoose';

@ObjectType('StudentType')
export class StudentType {
  @Field(() => ID)
  _id: Schema.Types.ObjectId;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

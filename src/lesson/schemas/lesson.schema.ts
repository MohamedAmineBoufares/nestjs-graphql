import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Student } from 'src/students/schemas/student.schema';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop({
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Student', default: [] },
    ],
  })
  students: Student[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);

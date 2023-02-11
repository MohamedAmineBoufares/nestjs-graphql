import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonResolver } from './lesson.resolver';
import { Lesson, LessonSchema } from './schemas/lesson.schema';
import { LessonService } from './lesson.service';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lesson.name, schema: LessonSchema }]),
    StudentsModule,
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}

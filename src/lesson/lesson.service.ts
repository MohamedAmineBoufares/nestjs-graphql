import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson, LessonDocument } from './schemas/lesson.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<LessonDocument>,
  ) {}

  async createLesson(
    name: string,
    startDate: string,
    endDate: string,
  ): Promise<Lesson> {
    try {
      const createdLesson = await this.lessonModel.create({
        name,
        startDate,
        endDate,
      });

      return createdLesson;
    } catch (error) {
      console.log(error);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonArgs } from './args/create-lesson.args';
import { Lesson, LessonDocument } from './schemas/lesson.schema';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name)
    private lessonModel: Model<LessonDocument>,
  ) {}

  async fetchLessons(): Promise<Lesson[]> {
    try {
      const lessons = await this.lessonModel.find();

      return lessons;
    } catch (error) {
      console.log(error);
    }
  }

  async findLessonById(id: string): Promise<Lesson> {
    try {
      const lessons = await this.lessonModel.findById(id);

      return lessons;
    } catch (error) {
      console.log(error);
    }
  }

  async createLesson(createLessonArgs: CreateLessonArgs): Promise<Lesson> {
    try {
      const createdLesson = await this.lessonModel.create(createLessonArgs);

      return createdLesson;
    } catch (error) {
      console.log(error);
    }
  }
}

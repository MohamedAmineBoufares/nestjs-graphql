import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AssignStudentToLessonDto } from './dto/assign-student-to-lesson.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';
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

      if (!lessons) {
        throw new NotFoundException();
      }

      return lessons;
    } catch (error) {
      console.log(error);

      if (error.status === 404) {
        throw new NotFoundException(`Lesson with ID: ${id} not found`);
      }
    }
  }

  async createLesson(createLessonDto: CreateLessonDto): Promise<Lesson> {
    try {
      const createdLesson = await this.lessonModel.create(createLessonDto);

      return createdLesson;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteLesson(id: string): Promise<string> {
    try {
      const deletedLesson = await this.lessonModel.findByIdAndDelete(id);

      if (!deletedLesson) {
        throw new NotFoundException();
      }

      return `Lesson with ID: ${deletedLesson.id} was deleted`;
    } catch (error) {
      console.log(error);

      if (error.status === 404) {
        throw new NotFoundException(`Lesson with ID: ${id} not found`);
      }
    }
  }

  async assignStudentToLesson({
    lessonId,
    studentIds,
  }: AssignStudentToLessonDto): Promise<Lesson> {
    try {
      const updatedLesson = await this.lessonModel.findByIdAndUpdate(
        lessonId,
        { students: studentIds },
        { new: true },
      );

      if (!updatedLesson) {
        throw new NotFoundException();
      }

      return updatedLesson;
    } catch (error) {
      console.log(error);

      if (error.status === 404) {
        throw new NotFoundException(`Lesson with ID: ${lessonId} not found`);
      }
    }
  }
}

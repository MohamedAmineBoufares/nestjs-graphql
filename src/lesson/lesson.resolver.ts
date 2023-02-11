import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLessonArgs } from './args/create-lesson.args';
import { LessonService } from './lesson.service';
import { LessonType } from './types/lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(() => [LessonType])
  fetchLessons() {
    return this.lessonService.fetchLessons();
  }

  @Query(() => LessonType)
  findLessonById(@Args('id') id: string) {
    return this.lessonService.findLessonById(id);
  }

  @Mutation(() => LessonType)
  createLesson(@Args() createLessonArgs: CreateLessonArgs) {
    return this.lessonService.createLesson(createLessonArgs);
  }
}

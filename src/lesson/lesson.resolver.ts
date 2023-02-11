import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentsService } from 'src/students/students.service';
import { AssignStudentToLessonDto } from './dto/assign-student-to-lesson.dto';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';
import { LessonType } from './types/lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private readonly studentsService: StudentsService,
  ) {}

  @Query(() => [LessonType])
  fetchLessons() {
    return this.lessonService.fetchLessons();
  }

  @Query(() => LessonType)
  findLessonById(@Args('id') id: string) {
    return this.lessonService.findLessonById(id);
  }

  @Mutation(() => LessonType)
  createLesson(@Args() createLessonDto: CreateLessonDto) {
    return this.lessonService.createLesson(createLessonDto);
  }

  @Mutation(() => String)
  deleteLesson(@Args('id') id: string) {
    return this.lessonService.deleteLesson(id);
  }

  @Mutation(() => LessonType)
  assignStudentToLesson(
    @Args() assignStudentToLessonDto: AssignStudentToLessonDto,
  ) {
    return this.lessonService.assignStudentToLesson(assignStudentToLessonDto);
  }

  @ResolveField()
  async students(@Parent() lesson: LessonType) {
    return await this.studentsService.findStudentsByIds(lesson.students);
  }
}

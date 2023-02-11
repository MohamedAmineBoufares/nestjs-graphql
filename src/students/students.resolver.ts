import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { StudentType } from './types/student.type';

@Resolver(() => StudentType)
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [StudentType])
  fetchStudents() {
    return this.studentsService.fetchStudents();
  }

  @Query(() => StudentType)
  findStudentById(@Args('id') id: string) {
    return this.studentsService.findStudentById(id);
  }

  @Mutation(() => StudentType)
  createStudent(@Args() createLessonDto: CreateStudentDto) {
    return this.studentsService.createStudent(createLessonDto);
  }

  @Mutation(() => String)
  deleteStudent(@Args('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';

import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private studentModel: Model<StudentDocument>,
  ) {}

  async fetchStudents(): Promise<Student[]> {
    try {
      const students = await this.studentModel.find();

      return students;
    } catch (error) {
      console.log(error);
    }
  }

  async findStudentById(id: string): Promise<Student> {
    try {
      const student = await this.studentModel.findById(id);

      if (!student) {
        throw new NotFoundException();
      }

      return student;
    } catch (error) {
      console.log(error);

      if (error.status === 404) {
        throw new NotFoundException(`Student with ID: ${id} not found`);
      }
    }
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    try {
      const createdStudent = await this.studentModel.create(createStudentDto);

      return createdStudent;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteStudent(id: string): Promise<string> {
    try {
      const deletedStudent = await this.studentModel.findByIdAndDelete(id);

      if (!deletedStudent) {
        throw new NotFoundException();
      }

      return `Student with ID: ${deletedStudent.id} was deleted`;
    } catch (error) {
      console.log(error);

      if (error.status === 404) {
        throw new NotFoundException(`Student with ID: ${id} not found`);
      }
    }
  }

  async findStudentsByIds(ids: string[]): Promise<Student[]> {
    try {
      const students = await this.studentModel.find({
        _id: {
          $in: ids,
        },
      });

      return students;
    } catch (error) {
      console.log(error);
    }
  }
}

// src/repositories/studentRepository.ts
import {
  Student,
  CreateStudentRequest,
  UpdateStudentRequest,
} from "../models/student";

export abstract class StudentRepository {
  abstract create(student: CreateStudentRequest): Promise<Student>;
  abstract getAll(): Promise<Student[]>;
  abstract getById(id: number): Promise<Student | null>;
  abstract update(
    id: number,
    student: UpdateStudentRequest
  ): Promise<Student | null>;
  abstract delete(id: number): Promise<boolean>;
}

export class InMemoryStudentRepository implements StudentRepository {
  private students: Student[] = [];
  private currentId: number = 1;

  async create(student: CreateStudentRequest): Promise<Student> {
    const newStudent: Student = { id: this.currentId++, ...student };
    this.students.push(newStudent);
    return newStudent;
  }

  async getAll(): Promise<Student[]> {
    return this.students;
  }

  async getById(id: number): Promise<Student | null> {
    const student = this.students.find((s) => s.id === id);
    return student || null;
  }

  async update(
    id: number,
    student: UpdateStudentRequest
  ): Promise<Student | null> {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) return null;

    const updatedStudent = { ...this.students[index], ...student };
    this.students[index] = updatedStudent;
    return updatedStudent;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) return false;

    this.students.splice(index, 1);
    return true;
  }
}

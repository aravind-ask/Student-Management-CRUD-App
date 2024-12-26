// src/models/student.ts
export interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

export interface CreateStudentRequest {
  name: string;
  age: number;
  course: string;
}

export interface UpdateStudentRequest {
  name?: string;
  age?: number;
  course?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

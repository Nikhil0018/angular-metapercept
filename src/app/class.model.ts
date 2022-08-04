import { StudentModel } from './student.model';

export interface ClassData {
  id?: string;
  schoolId?: string;
  students?: StudentModel[];
  status?: string;
}

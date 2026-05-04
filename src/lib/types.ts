export interface Student {
  id: number;
  orderNumber: number;
  studentId: string;
  fullName: string;
  nickname: string;
  email: string;
  phone: string;
  photoUrl: string;
  classroom: Classroom;
}

export type Classroom = 'ม.4/5' | 'ม.4/6' | 'ม.4/7' | 'ม.4/9' | 'ม.5/5' | 'ม.5/6' | 'ม.5/7' | 'ม.5/9';

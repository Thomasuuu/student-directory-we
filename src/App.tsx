import { useState, useMemo } from 'react';
import { studentsData } from '@/lib/data';
import { Student, Classroom } from '@/lib/types';
import { StudentCard } from '@/components/StudentCard';
import { StudentDetailModal } from '@/components/StudentDetailModal';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MagnifyingGlass, GraduationCap } from '@phosphor-icons/react';

const CLASSROOMS: Classroom[] = ['ม.4/6', 'ม.4/7', 'ม.5/6', 'ม.5/7'];

function App() {
  const [selectedClassroom, setSelectedClassroom] = useState<Classroom>('ม.5/7');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStudents = useMemo(() => {
    return studentsData
      .filter(student => student.classroom === selectedClassroom)
      .filter(student => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          student.fullName.toLowerCase().includes(query) ||
          student.nickname.toLowerCase().includes(query) ||
          student.studentId.includes(query) ||
          student.email.toLowerCase().includes(query) ||
          student.phone.includes(query)
        );
      });
  }, [selectedClassroom, searchQuery]);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-br from-primary via-primary to-accent/80 text-primary-foreground py-12 px-6 md:px-12 lg:px-24 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-3">
            <GraduationCap className="w-10 h-10" weight="duotone" />
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              ระบบรายชื่อนักเรียน
            </h1>
          </div>
          <p className="text-primary-foreground/90 text-lg">
            โรงเรียนอ่างทองปัทมโรจน์วิทยาคม
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-16">
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <Tabs value={selectedClassroom} onValueChange={(value) => setSelectedClassroom(value as Classroom)}>
              <TabsList className="w-full justify-start h-auto p-1 bg-muted">
                {CLASSROOMS.map(classroom => (
                  <TabsTrigger
                    key={classroom}
                    value={classroom}
                    className="flex-1 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-base py-3 rounded-lg font-medium"
                  >
                    {classroom}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative">
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ค้นหาด้วยชื่อ ชื่อเล่น เลขประจำตัว อีเมล หรือเบอร์โทร"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-card border-border"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              พบ <span className="font-semibold text-foreground">{filteredStudents.length}</span> คน
            </p>
          </div>

          {filteredStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStudents.map((student, index) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onClick={() => handleStudentClick(student)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlass className="w-10 h-10 text-muted-foreground" weight="light" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                ไม่พบข้อมูล
              </h3>
              <p className="text-muted-foreground">
                ลองค้นหาด้วยคำอื่นหรือเปลี่ยนห้องเรียน
              </p>
            </div>
          )}
        </div>
      </div>

      <StudentDetailModal
        student={selectedStudent}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </div>
  );
}

export default App;
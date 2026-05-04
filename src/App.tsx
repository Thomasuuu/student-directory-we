import { useState, useMemo } from 'react';
import { studentsData } from '@/lib/data';
import { Student, Classroom } from '@/lib/types';
import { StudentCard } from '@/components/StudentCard';
import { StudentDetailModal } from '@/components/StudentDetailModal';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MagnifyingGlass, GraduationCap } from '@phosphor-icons/react';

const CLASSROOMS: Classroom[] = ['ม.4/5', 'ม.4/6', 'ม.4/7', 'ม.5/5', 'ม.5/6', 'ม.5/7'];

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
          student.phone.includes(query) ||
          student.orderNumber.toString().includes(query)
        );
      });
  }, [selectedClassroom, searchQuery]);

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen holographic-bg">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative">
          <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-4 sm:py-6 md:py-8">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="glass-card p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl space-y-3 sm:space-y-4 md:space-y-6">
                <Tabs 
                  value={selectedClassroom} 
                  onValueChange={(value) => setSelectedClassroom(value as Classroom)}
                  className="w-full"
                >
                  <TabsList className="w-full grid grid-cols-3 lg:grid-cols-6 h-auto p-1 sm:p-1.5 bg-secondary/50 backdrop-blur-sm gap-1 sm:gap-1.5">
                    {CLASSROOMS.map(classroom => (
                      <TabsTrigger
                        key={classroom}
                        value={classroom}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-200"
                      >
                        {classroom}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <div className="relative">
                  <MagnifyingGlass className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="ค้นหาด้วย เลขที่ ชื่อ ชื่อเล่น อีเมล หรือเบอร์โทร"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 sm:pl-12 h-10 sm:h-12 md:h-14 text-sm sm:text-base bg-background/60 border-border/50 backdrop-blur-sm focus:bg-background transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                {filteredStudents.map((student, index) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onClick={() => handleStudentClick(student)}
                    index={index}
                  />
                ))}
              </div>
              
              {filteredStudents.length === 0 && (
                <div className="glass-card p-8 sm:p-12 md:p-16 rounded-xl md:rounded-2xl text-center mt-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <MagnifyingGlass className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-muted-foreground" weight="light" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2">
                    ไม่พบข้อมูล
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    ลองค้นหาด้วยคำอื่นหรือเปลี่ยนห้องเรียน
                  </p>
                </div>
              )}
            </div>
          </main>
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
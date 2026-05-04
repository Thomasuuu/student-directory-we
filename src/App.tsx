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
          student.phone.includes(query)
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
          <header className="glass-card mx-6 mt-6 md:mx-12 lg:mx-24 md:mt-8 p-8 md:p-12 rounded-2xl md:rounded-3xl">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" weight="duotone" />
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-1">
                    ระบบรายชื่อนักเรียน
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground">
                    โรงเรียนอ่างทองปัทมโรจน์วิทยาคม
                  </p>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-8 md:py-12">
            <div className="space-y-6 md:space-y-8">
              <div className="glass-card p-6 md:p-8 rounded-2xl space-y-6">
                <Tabs 
                  value={selectedClassroom} 
                  onValueChange={(value) => setSelectedClassroom(value as Classroom)}
                  className="w-full"
                >
                  <TabsList className="w-full grid grid-cols-3 lg:grid-cols-6 h-auto p-1.5 bg-secondary/50 backdrop-blur-sm gap-1.5">
                    {CLASSROOMS.map(classroom => (
                      <TabsTrigger
                        key={classroom}
                        value={classroom}
                        className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm text-sm md:text-base py-2.5 md:py-3 rounded-xl font-medium transition-all duration-200"
                      >
                        {classroom}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>

                <div className="relative">
                  <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="ค้นหาด้วยชื่อ ชื่อเล่น เลขประจำตัว อีเมล หรือเบอร์โทร"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 md:h-14 text-base bg-background/60 border-border/50 backdrop-blur-sm focus:bg-background transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-sm md:text-base text-muted-foreground">
                    พบ <span className="font-semibold text-primary">{filteredStudents.length}</span> คน
                  </p>
                </div>
              </div>

              {filteredStudents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
                <div className="glass-card p-12 md:p-16 rounded-2xl text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-6">
                    <MagnifyingGlass className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" weight="light" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    ไม่พบข้อมูล
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
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
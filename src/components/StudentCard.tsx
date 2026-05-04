import { Student } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

interface StudentCardProps {
  student: Student;
  onClick: () => void;
  index: number;
}

export function StudentCard({ student, onClick, index }: StudentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card
        onClick={onClick}
        className="group relative overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg bg-card border-border"
      >
        <div className="aspect-square relative overflow-hidden">
          <Avatar className="w-full h-full rounded-none">
            <AvatarImage 
              src={student.photoUrl} 
              alt={student.fullName}
              className="object-cover"
            />
            <AvatarFallback className="rounded-none bg-muted">
              <User className="w-16 h-16 text-muted-foreground" weight="light" />
            </AvatarFallback>
          </Avatar>
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
          
          <div className="absolute top-3 right-3">
            <Badge 
              variant="secondary" 
              className="bg-background/95 text-foreground font-mono text-xs backdrop-blur-sm"
            >
              {student.studentId}
            </Badge>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
            <h3 className="font-semibold text-lg leading-tight mb-1 line-clamp-2">
              {student.fullName}
            </h3>
            <p className="text-sm opacity-90">
              {student.nickname !== '-' ? student.nickname : 'ไม่ระบุชื่อเล่น'}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

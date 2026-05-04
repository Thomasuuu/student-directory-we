import { Student } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
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
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-2xl"
    >
      <div className="aspect-square relative overflow-hidden">
        <Avatar className="w-full h-full rounded-none">
          <AvatarImage 
            src={student.photoUrl} 
            alt={student.fullName}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <AvatarFallback className="rounded-none bg-muted">
            <User className="w-16 h-16 text-muted-foreground" weight="light" />
          </AvatarFallback>
        </Avatar>
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
        
        <div className="absolute top-3 left-3">
          <Badge 
            variant="default" 
            className="bg-primary text-primary-foreground font-semibold text-sm backdrop-blur-md border-0 shadow-lg px-3 py-1"
          >
            เลขที่ {student.orderNumber}
          </Badge>
        </div>

        <div className="absolute top-3 right-3">
          <Badge 
            variant="secondary" 
            className="bg-background/95 text-foreground font-mono text-xs backdrop-blur-md border border-border/50 shadow-lg"
          >
            {student.studentId}
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-semibold text-lg leading-tight mb-1.5 line-clamp-2 text-background">
            {student.fullName}
          </h3>
          <p className="text-sm text-background/90 font-medium">
            {student.nickname !== '-' ? student.nickname : 'ไม่ระบุชื่อเล่น'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

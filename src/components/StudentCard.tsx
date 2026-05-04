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
      className="group glass-card overflow-hidden cursor-pointer transition-all duration-300 active:scale-95 sm:hover:scale-[1.02] hover:shadow-2xl rounded-xl sm:rounded-2xl touch-manipulation"
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Avatar className="w-full h-full rounded-none">
          <AvatarImage 
            src={student.photoUrl} 
            alt={student.fullName}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <AvatarFallback className="rounded-none bg-muted">
            <User className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-muted-foreground" weight="light" />
          </AvatarFallback>
        </Avatar>
        
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <Badge 
            variant="default" 
            className="bg-primary text-primary-foreground font-bold text-lg sm:text-xl md:text-2xl backdrop-blur-md border-0 shadow-lg px-3 py-1.5 sm:px-4 sm:py-2"
          >
            {student.orderNumber}
          </Badge>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base leading-tight mb-0.5 sm:mb-1 line-clamp-2 text-background">
            {student.fullName}
          </h3>
          <p className="text-[10px] sm:text-xs md:text-sm text-background/90 font-medium line-clamp-1">
            {student.nickname !== '-' ? student.nickname : 'ไม่ระบุ'}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

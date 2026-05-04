import { Student } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent [mask-image:linear-gradient(to_top,black_40%,transparent_75%)] opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 z-10">
          <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-white/85 backdrop-blur-sm text-slate-700 text-[10px] font-semibold tabular-nums leading-none select-none">
            {student.orderNumber}
          </span>
        </div>
        
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

import { Student } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Envelope, Phone, IdentificationCard, GraduationCap } from '@phosphor-icons/react';

interface StudentDetailModalProps {
  student: Student | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentDetailModal({ student, open, onOpenChange }: StudentDetailModalProps) {
  if (!student) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md glass-elevated border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            ข้อมูลนักเรียน
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-xl">
              <AvatarImage 
                src={student.photoUrl} 
                alt={student.fullName}
                className="object-cover"
              />
              <AvatarFallback>
                <User className="w-16 h-16 text-muted-foreground" weight="light" />
              </AvatarFallback>
            </Avatar>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                {student.fullName}
              </h3>
              <p className="text-muted-foreground">
                {student.nickname !== '-' ? `"${student.nickname}"` : 'ไม่ระบุชื่อเล่น'}
              </p>
            </div>
          </div>

          <Separator className="bg-border/50" />

          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <GraduationCap className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                  เลขที่
                </p>
                <p className="text-2xl font-bold text-primary">
                  {student.orderNumber}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <IdentificationCard className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                  เลขประจำตัวนักเรียน
                </p>
                <p className="font-mono text-sm font-semibold text-foreground">
                  {student.studentId}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <GraduationCap className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                  ห้องเรียน
                </p>
                <Badge variant="default" className="bg-primary text-primary-foreground shadow-sm">
                  {student.classroom}
                </Badge>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Envelope className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                  อีเมล
                </p>
                <p className="text-sm text-foreground break-all">
                  {student.email !== '-' ? student.email : 'ไม่ระบุ'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Phone className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">
                  เบอร์โทรศัพท์
                </p>
                <p className="font-mono text-sm text-foreground">
                  {student.phone !== '-' ? student.phone : 'ไม่ระบุ'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

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
import { User, Envelope, Phone, IdentificationCard } from '@phosphor-icons/react';

interface StudentDetailModalProps {
  student: Student | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function StudentDetailModal({ student, open, onOpenChange }: StudentDetailModalProps) {
  if (!student) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">
            ข้อมูลนักเรียน
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-32 h-32 border-4 border-secondary">
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

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <IdentificationCard className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                  เลขประจำตัวนักเรียน
                </p>
                <p className="font-mono text-sm font-medium text-foreground">
                  {student.studentId}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Envelope className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                  อีเมล
                </p>
                <p className="text-sm text-foreground break-all">
                  {student.email !== '-' ? student.email : 'ไม่ระบุ'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                  เบอร์โทรศัพท์
                </p>
                <p className="font-mono text-sm text-foreground">
                  {student.phone !== '-' ? student.phone : 'ไม่ระบุ'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <User className="w-5 h-5 text-primary" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-1">
                  ห้องเรียน
                </p>
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  {student.classroom}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

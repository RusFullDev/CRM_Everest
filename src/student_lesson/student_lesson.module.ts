import { Module } from '@nestjs/common';
import { StudentLessonService } from './student_lesson.service';
import { StudentLessonController } from './student_lesson.controller';

@Module({
  controllers: [StudentLessonController],
  providers: [StudentLessonService],
})
export class StudentLessonModule {}

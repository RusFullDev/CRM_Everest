import { Module } from '@nestjs/common';
import { StudentGroupService } from './student_group.service';
import { StudentGroupController } from './student_group.controller';

@Module({
  controllers: [StudentGroupController],
  providers: [StudentGroupService],
})
export class StudentGroupModule {}

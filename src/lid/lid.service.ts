import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  constructor(@InjectRepository(Lid) private lidRepo:Repository<Lid>){}
  create(createLidDto: CreateLidDto) {
    const{ first_name,last_name,phone_number,target_id,lid_stage_id,test_date,trial_lesson_date,
      trial_lesson_time,trial_lesson_group_id,lid_status_id,cancel_reson_id}= createLidDto
    return this.lidRepo.save({ first_name,last_name,phone_number,target_id,lid_stage_id,test_date,trial_lesson_date,
      trial_lesson_time,trial_lesson_group_id,lid_status_id,cancel_reson_id})
  }

  findAll() {
    return this.lidRepo.find()
  }

  findOne(id: number) {
    return this.lidRepo.findOneBy({id})
  }

  update(id: number, updateLidDto: UpdateLidDto) {
    return this.lidRepo.update({id},updateLidDto)
  }

  remove(id: number) {
    return this.lidRepo.delete({id})
  }
}

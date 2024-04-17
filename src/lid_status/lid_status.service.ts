import { Injectable } from '@nestjs/common';
import { CreateLidStatusDto } from './dto/create-lid_status.dto';
import { UpdateLidStatusDto } from './dto/update-lid_status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LidStatus } from './entities/lid_status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidStatusService {
  constructor(@InjectRepository(LidStatus) private lidStatusRepo:Repository<LidStatus>){}

  create(createLidStatusDto: CreateLidStatusDto) {
    const{status} = createLidStatusDto
    return this.lidStatusRepo.save({status})
  }

  findAll() {
    return this.lidStatusRepo.find()
  }

  findOne(id: number) {
    return this.lidStatusRepo.findOneBy({id})
  }

  update(id: number, updateLidStatusDto: UpdateLidStatusDto) {
    return this.lidStatusRepo.update({id},updateLidStatusDto)
  }

  remove(id: number) {
    return this.lidStatusRepo.delete({id})
  }
}

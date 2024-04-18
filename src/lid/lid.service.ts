import { Injectable } from '@nestjs/common';
import { CreateLidDto } from './dto/create-lid.dto';
import { UpdateLidDto } from './dto/update-lid.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lid } from './entities/lid.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LidService {
  constructor(@InjectRepository(Lid) private lidRepo:Repository<Lid>){}
  create(createLidDto) {
  return this.lidRepo.save(createLidDto)
  }

  findAll() {
    return this.lidRepo.find({
      relations:{
        lid_status_id:true,
        reason_lid_id:true,
        stage_id:true,
        target_id:true
      }
      ,
      // select:{
      //   first_name:true,
      //   lid_status_id:{
      //     status:true
      //   }
      // }
    })
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

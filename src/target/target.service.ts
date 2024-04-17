import { Injectable } from '@nestjs/common';
import { CreateTargetDto } from './dto/create-target.dto';
import { UpdateTargetDto } from './dto/update-target.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Target } from './entities/target.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TargetService {
  constructor(@InjectRepository(Target) private targetRepo:Repository<Target>){}
  create(createTargetDto: CreateTargetDto) {
    const {name} = createTargetDto
    return this.targetRepo.save({name})
  }

  findAll() {
    return this.targetRepo.find()
  }

  findOne(id: number) {
    return this.targetRepo.findOneBy({id})
  }

  update(id: number, updateTargetDto: UpdateTargetDto) {
    return this.targetRepo.update({id},updateTargetDto)
  }

  remove(id: number) {
    return this.targetRepo.delete({id})
  }
}

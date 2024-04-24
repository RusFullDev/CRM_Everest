
import { BranchService } from './branch.service';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Branch } from './entities/branch.entity';

@Resolver('branch')
export class BranchResolve {
  constructor(private readonly branchService: BranchService) {}

  

  @Query(()=>[Branch])
  findAll() {
    return this.branchService.findAll();
  }

  @Query(()=>Branch)
  findOneBranch(@Args('id',{type:()=>ID}) id:number) {
    return this.branchService.findOne(id);
  }


  @Mutation(()=>Branch)
  createBranch(@Args('createBranch') createBranchDto: CreateBranchDto) {
    return this.branchService.create(createBranchDto);
  }
  @Mutation(()=>Branch)
  updateBranch(@Args('id',{type:()=>ID}) id: number, 
  @Args('updateBranch') updateBranchDto: UpdateBranchDto) {
    return this.branchService.update(id, updateBranchDto);
  }

  @Mutation(()=>Branch)
  removeBranch(@Args('id',{type:()=>ID}) id: number) {
    return this.branchService.remove(id);
  }
}

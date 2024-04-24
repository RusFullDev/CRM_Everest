import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Group } from "src/group/entities/group.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@ObjectType()
@Entity()
export class Branch {
    @Field(()=>ID)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    name:string

    @Field()
    @Column()
    address:string

    @Field()
    @Column()
    call_number:string


    @OneToMany(()=>Group,(data)=>data.branch_id)
    @Field(()=>[Group])
    branches:Group[]
}

import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReasonLid {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    reason_lid:string

    @OneToMany(()=>Lid,(data)=>data.reason_lid_id)
    reasons_lid:Lid[]
}

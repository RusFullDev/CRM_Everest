import { Lid } from "src/lid/entities/lid.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LidStatus {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    status :string

    @OneToMany(()=>Lid,(data)=>data.lid_status_id)
    lidStatus:Lid[]
}

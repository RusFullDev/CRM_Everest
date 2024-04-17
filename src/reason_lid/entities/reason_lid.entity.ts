import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReasonLid {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    reason_lid:string
}

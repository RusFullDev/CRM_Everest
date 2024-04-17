import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LidStatus {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    status:string
}

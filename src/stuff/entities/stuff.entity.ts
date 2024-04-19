import { Role } from "src/role/entities/role.entity";
import { StuffRole } from "src/stuff_role/entities/stuff_role.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stuff {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    first_name:string
    @Column()
    last_name:string
    @Column()
    phone_number:string
    @Column()
    login:string
    @Column()
    parol:string
    @Column({default:false})
    is_active:boolean

    @OneToMany(() => StuffRole,(data)=>data.stuffId)
        stuffRoles: StuffRole[]
}

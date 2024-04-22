import { LidStatus } from "src/lid_status/entities/lid_status.entity";
import { ReasonLid } from "src/reason_lid/entities/reason_lid.entity";
import { Stage } from "src/stage/entities/stage.entity";
import { Student } from "src/students/entities/student.entity";
import { Target } from "src/target/entities/target.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lid {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    first_name:string

    @Column()
    last_name:string

    @Column()
    phone_number:string

    @ManyToOne(()=>Target,(data)=>data.targets)
    target_id:Target

    @ManyToOne(()=>Stage,(data)=>data.stages)
     stage_id:Stage

    @Column()
    test_date:Date

    @Column()
    trial_lesson_date:Date

    @Column()
    trial_lesson_time:string

    @Column()
    trial_lesson_group_id:number

    @ManyToOne(()=>LidStatus,(data)=>data.lidStatus)
    lid_status_id:LidStatus
    
    @ManyToOne(()=>ReasonLid,(data)=>data.reasons_lid)
    reason_lid_id:ReasonLid
    
    @OneToMany(()=>Student,(data)=>data.lid_id)
    students:Student[]
}

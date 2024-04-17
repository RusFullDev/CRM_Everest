import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    target_id:number

    @Column()
    lid_stage_id:number

    @Column()
    test_date:Date

    @Column()
    trial_lesson_date:Date

    @Column()
    trial_lesson_time:string

    @Column()
    trial_lesson_group_id:number

    @Column()
    lid_status_id:number
    
    @Column()
    cancel_reson_id:number
}

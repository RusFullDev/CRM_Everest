import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id:number
    @ManyToOne(()=>Student,(data)=>data.payments)
    student_id:Student
    @Column()
    payment_last_date:Date
    @Column()
    payment_date:Date
    @Column()
    price:number
    @Column()
    is_paid:boolean
    @Column()
    total_payment:number
}

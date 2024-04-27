import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateStudentLessonDto {

    @Field(()=>Int)
    lesson_id:object

    @Field(()=>Int)
    student_id:object

    @Field()
    is_there:boolean

    @Field()
    reason:string
    
    @Field()
    be_paid:boolean
}

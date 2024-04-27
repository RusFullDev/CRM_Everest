import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateStudentGroupDto {
    
    @Field(()=>Int)
    student_id:object

    @Field(()=>Int)
    group_id:object
}

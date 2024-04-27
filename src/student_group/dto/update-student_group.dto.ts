


import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdateStudentGroupDto {
    
    @Field(()=>Int,{nullable:true})
    student_id?:object

    @Field(()=>Int,{nullable:true})
    group_id?:object
}

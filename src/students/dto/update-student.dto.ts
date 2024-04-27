


import { Field, InputType, Int, } from "@nestjs/graphql"

@InputType()
export class UpdateStudentDto {
    
    @Field(()=>Int,{nullable:true})
    lid_id?:object

    @Field({nullable:true})
    first_name?:string

    @Field({nullable:true})
    last_name?:string
    
    @Field({nullable:true})
    phone_number?:string

    @Field({nullable:true})
    bith_date?:string
    
    @Field({nullable:true})
    gender?:string
}

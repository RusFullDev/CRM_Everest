

import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdatePaymentDto {
    
    @Field(()=>Int,{nullable:true})
    student_id?:object

    @Field({nullable:true})
    payment_last_date?:Date

    @Field({nullable:true})
    payment_date?:Date

    @Field({nullable:true})
    price?:number

    @Field({nullable:true})
    is_paid?:boolean
    
    @Field({nullable:true})
    total_payment?:number
}

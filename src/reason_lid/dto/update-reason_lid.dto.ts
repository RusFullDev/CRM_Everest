


import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdateReasonLidDto {

    @Field(()=>Int,{nullable:true})
    reason_lid?:string
}

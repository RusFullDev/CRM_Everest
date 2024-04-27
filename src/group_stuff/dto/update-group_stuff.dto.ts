
import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdateGroupStuffDto {
    @Field(()=>Int,{nullable:true})
    group_id?:object

    @Field(()=>Int,{nullable:true})
    stuff_id?:object
}

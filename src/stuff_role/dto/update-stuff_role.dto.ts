


import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdateStuffRoleDto  {

    @Field(()=>Int,{nullable:true})
    roleId?:object
    
    @Field(()=>Int,{nullable:true})
    stuffId?:object
}

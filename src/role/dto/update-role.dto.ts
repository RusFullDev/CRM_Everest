

import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class UpdateRoleDto {
    
    @Field({nullable:true})
    name?:string
}
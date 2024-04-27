import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateStuffRoleDto {
    
    @Field(()=>Int)
    roleId:object

    @Field(()=>Int)
    stuffId:object
}

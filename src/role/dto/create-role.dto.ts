import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreateRoleDto {
    @Field()
    name:string
}

import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreateLidStatusDto {
    @Field()
    status:string
}

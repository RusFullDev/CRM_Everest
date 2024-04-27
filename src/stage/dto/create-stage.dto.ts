import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreateStageDto {
    @Field()
    name:string
}

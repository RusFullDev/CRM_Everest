import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateTargetDto {
    @Field({nullable:true})
    name:string
}

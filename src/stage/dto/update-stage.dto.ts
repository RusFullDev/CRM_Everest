
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class UpdateStageDto {
    @Field({nullable:true})
    name?:string
}

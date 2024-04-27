
import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class UpdateLidStatusDto {
    
    @Field({nullable:true})
    status?:string
}

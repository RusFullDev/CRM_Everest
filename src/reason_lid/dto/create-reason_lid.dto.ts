import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";


@InputType()
export class CreateReasonLidDto {
    @Field(()=>Int)
    reason_lid:string
}

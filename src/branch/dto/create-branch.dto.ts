import { Field, InputType, } from "@nestjs/graphql"

@InputType()
export class CreateBranchDto {
    @Field()
    name:string
    @Field()
    address:string

    @Field()
    call_number:string
}

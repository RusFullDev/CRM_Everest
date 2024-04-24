import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CreateBranchDto {
    @Field()
    name:string
    @Field()
    address:string

    @Field()
    call_number:string
}


import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdateBranchDto {
    @Field({nullable:true})
    name?:string

    @Field({nullable:true})
    address?:string

    @Field({nullable:true})
    call_number?:string
}
import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateStuffDto {

    @Field()
    first_name:string

    @Field()
    last_name:string

    @Field()
    phone_number:string

    @Field()
    login:string

    @Field()
    parol:string
    
    @Field()
    confirm_parol:string
      
}

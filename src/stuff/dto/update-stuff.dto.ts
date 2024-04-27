


import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class UpdateStuffDto {
    
    @Field({nullable:true})
    first_name?:string
    
    @Field({nullable:true})
    last_name?:string

    @Field({nullable:true})
    phone_number?:string

    @Field({nullable:true})
    login?:string

    @Field({nullable:true})
    parol?:string

    @Field({nullable:true})
    confirm_parol?:string
      
}

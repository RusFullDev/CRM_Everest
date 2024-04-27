import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"


@InputType()
export class UpdateLidDto {

    @Field({nullable:true})
    first_name?:string

    @Field({nullable:true})
    last_name?:string

    @Field({nullable:true})
    phone_number?:string

    @Field(()=>Int,{nullable:true})
    target_id?:object

    @Field(()=>Int,{nullable:true})
    lid_stage_id?:object

    @Field({nullable:true})
    test_date?:Date

    @Field({nullable:true})
    trial_lesson_date?:Date

    @Field({nullable:true})
    trial_lesson_time?:string

    @Field(()=>Int,{nullable:true})
    trial_lesson_group_id?:object

    @Field(()=>Int,{nullable:true})
    lid_status_id?:object
    
    @Field(()=>Int,{nullable:true})
    reason_lid_id?:object

}
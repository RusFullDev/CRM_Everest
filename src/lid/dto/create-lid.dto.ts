import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateLidDto {
    @Field()
    first_name:string

    @Field()
    last_name:string

    @Field()
    phone_number:string

    @Field(()=>Int)
    target_id:object

    @Field(()=>Int)
    lid_stage_id:object

    @Field()
    test_date:Date

    @Field()
    trial_lesson_date:Date

    @Field()
    trial_lesson_time:string

    @Field(()=>Int)
    trial_lesson_group_id:object

    @Field(()=>Int)
    lid_status_id:object

    @Field(()=>Int)
    reason_lid_id:object

}

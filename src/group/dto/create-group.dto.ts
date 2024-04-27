import { Field, InputType, Int, ObjectType } from "@nestjs/graphql"

@InputType()
export class CreateGroupDto {

    @Field()
    group_name:string

    @Field()
    lesson_start_time:string

    @Field()
    lesson_continuous:string

    @Field()
    lesson_week_day:string

    @Field(()=>Int)
    group_stage_id:object

    @Field()
    room_number:number

    @Field()
    room_floor:number

    @Field(()=>Int)
    branch_id:object

    @Field()
    lessons_quant:number
    
    @Field()
    is_active:boolean

}

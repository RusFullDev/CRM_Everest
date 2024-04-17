import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LidStatusModule } from './lid_status/lid_status.module';
import { LidStatus } from './lid_status/entities/lid_status.entity';
import { ReasonLidModule } from './reason_lid/reason_lid.module';
import { ReasonLid } from './reason_lid/entities/reason_lid.entity';
import { StageModule } from './stage/stage.module';
import { TargetModule } from './target/target.module';
import { LidModule } from './lid/lid.module';
import { Stage } from './stage/entities/stage.entity';
import { Target } from './target/entities/target.entity';
import { Lid } from './lid/entities/lid.entity';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
   TypeOrmModule.forRoot({
  type:"postgres",
   port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  synchronize: true,
  entities: [LidStatus,ReasonLid,Stage,Target,Lid],
    }),
   LidStatusModule,
   ReasonLidModule,
   StageModule,
   TargetModule,
   LidModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

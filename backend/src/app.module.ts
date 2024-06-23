import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SacController } from './sac/sac.controller';
import { SacModule } from './sac/sac.module';
import { VoluntarioModule } from './voluntario/voluntario.module';
import { RoadmapModule } from './roadmap/roadmap.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadmapController } from './roadmap/roadmap.controller';
import { RoadmapEntity } from './roadmap/entities/RoadmapEntity';
import { RoadmapService } from './roadmap/roadmap.service';
import { EtapaModule } from './etapa/etapa.module';
import { EtapaEntity } from './etapa/entities/EtapaEntity';
import { EtapaService } from './etapa/etapa.service';
import { EtapaController } from './etapa/etapa.controller';
import { SacService } from './sac/sac.service';
import { SacEntity } from './sac/entities/SacEntity';
import { SendEmailService } from './send-email/send-email.service';
import { SendEmailModule } from './send-email/send-email.module';
import * as dotenv from 'dotenv';
import { VoluntariadoEntity } from './voluntario/entities/VoluntariadoEntities';
import { VoluntarioEntity } from './voluntario/entities/VoluntarioEntities';

dotenv.config()

@Module({
    
  imports: [
    SacModule, VoluntarioModule, RoadmapModule,EtapaModule,SacModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host:process.env.DB_HOST ,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [RoadmapEntity, EtapaEntity, SacEntity , VoluntariadoEntity , VoluntarioEntity],
      migrations:[`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun:true,
      synchronize: true
      
    }),
    TypeOrmModule.forFeature([RoadmapEntity,EtapaEntity , SacEntity , VoluntarioEntity , VoluntariadoEntity]),
    EtapaModule,
    SendEmailModule,
  ],
  controllers: [AppController, SacController , RoadmapController, EtapaController , SacController],
  providers: [AppService , RoadmapService , EtapaService , SacService, SendEmailService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { EtapaController } from './etapa.controller';
import { EtapaService } from './etapa.service';
import { EtapaEntity } from './entities/EtapaEntity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadmapService } from 'src/roadmap/roadmap.service';
import { RoadmapEntity } from 'src/roadmap/entities/RoadmapEntity';

@Module({
  imports:[TypeOrmModule.forFeature([EtapaEntity, RoadmapEntity])],
  controllers: [EtapaController],
  providers: [EtapaService, RoadmapService]
})
export class EtapaModule {}

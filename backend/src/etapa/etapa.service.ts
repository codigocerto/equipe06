import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EtapaEntity } from './entities/EtapaEntity';
import { RoadmapService } from 'src/roadmap/roadmap.service';

@Injectable()
export class EtapaService {

    constructor(
        @InjectRepository(EtapaEntity)
        private readonly etapaRepository: Repository<EtapaEntity>,

        private readonly roadmapService : RoadmapService
      ) {}

    async addEtapa(dto : EtapaEntity , id : number){
        const findRoadmap = this.roadmapService.findRoadmapById(id)
        if(!findRoadmap){
            throw new Error("Roadmap não encontrado")
        }
        dto.roadmap_id = id

        
        return await this.etapaRepository.save(dto)
    }
}

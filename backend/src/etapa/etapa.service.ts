import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EtapaEntity } from './entities/EtapaEntity';
import { RoadmapService } from 'src/roadmap/roadmap.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EtapaService {

    constructor(
        @InjectRepository(EtapaEntity)
        private readonly etapaRepository: Repository<EtapaEntity>,

        private readonly roadmapService : RoadmapService
      ) {}
 
    async addEtapa(dto : EtapaEntity , id : string){
       
        const findRoadmap = await  this.roadmapService.findRoadmapById(id) 
       
        if(!findRoadmap ){
            throw new Error("Roadmap não encontrado")
        }

        if(!dto.id){
            dto.id = uuidv4()
        }
        dto.roadmap_id = id
        return this.etapaRepository.save(dto)
    }
}

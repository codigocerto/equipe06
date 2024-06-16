import { Injectable } from '@nestjs/common';
import { RoadmapEntity } from './entities/RoadmapEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Raw, Repository } from 'typeorm';
import { realpath } from 'fs';
import { ReturnRoadmapDTO } from './dto/returnRoadmap.dto';

@Injectable()
export class RoadmapService {

    constructor(
        @InjectRepository(RoadmapEntity)
        private readonly roadmapRepository: Repository<RoadmapEntity>,
      ) {}

    async addRoadmap(dto : RoadmapEntity){
        return this.roadmapRepository.save(dto)
    }

    async getRoadmapRelations(id : number){
        const relation = await this.roadmapRepository.findOne({
            where : {
                id: id
            },relations:['etapas'] 
        })

        return relation
    }

    async findRoadmapById(id : number){
        const find = await this.roadmapRepository.findOne({
            where : {
                id : id
            }
        })
    }

    async getByQuery(query: string): Promise<ReturnRoadmapDTO[]> {
        return this.roadmapRepository.find({
          where: [
            {  stack: Raw((alias) => `${alias} LIKE '%${query}%'`) }
          ], relations:['etapas']
        });
    }

    
}

import { Injectable } from '@nestjs/common';
import { RoadmapEntity } from './entities/RoadmapEntity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Raw, Repository } from 'typeorm';
import { realpath } from 'fs';
import { ReturnRoadmapDTO } from './dto/returnRoadmap.dto';
import {v4 as uuidv4} from "uuid"

@Injectable()
export class RoadmapService {

    constructor(
        @InjectRepository(RoadmapEntity)
        private readonly roadmapRepository: Repository<RoadmapEntity>,
      ) {}

    async addRoadmap(dto : RoadmapEntity){
        if(!dto.id){
            dto.id = uuidv4()
        }
        console.log(dto)
        return this.roadmapRepository.save(dto)
    }

    async getRoadmapRelations(id : string){
        const relation = await this.roadmapRepository.findOne({
            where : {
                id: id
            },relations:['etapas'] 
        })

        return relation
    }

    async findRoadmapById(id : string) {
        const find = await this.roadmapRepository.findOne({
            where : {
                id : id
            }
        })

        return find
    }

    async getByQuery(query: string): Promise<ReturnRoadmapDTO[]> {
        return this.roadmapRepository.find({
          where: [
            {  stack: Raw((alias) => `${alias} LIKE '%${query}%'`) }
          ], relations:['etapas']
        });
    }

    async delete(id: string) {
        // Verificar se o item existe
        const item = await this.roadmapRepository.findOne({
            where : {
                id : id
            }
        })
        
        if (!item) {
            throw new Error(`Item with id ${id} not found`);
        }
        
        // Tentar deletar o item
        try {
            await this.roadmapRepository.delete(id);
            return { message: 'Item successfully deleted' };
        } catch (error) {
            console.error(`Error deleting item with id ${id}:`, error);
            throw new Error(`Failed to delete item with id ${id}`);
        }
    }
    

    
}

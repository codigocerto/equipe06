import { Body, Get, Param, Query } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoadmapEntity } from './entities/RoadmapEntity';
import { RoadmapService } from './roadmap.service';
import { ReturnEtapaDTO } from 'src/etapa/dto/returnEtapa.dto';
import { ReturnRoadmapDTO } from './dto/returnRoadmap.dto';


@Controller('roadmap')
export class RoadmapController {

    constructor(private readonly roadmapService : RoadmapService){}

    @Post()
    async addRoadmap(@Body() dto : RoadmapEntity ) : Promise<ReturnRoadmapDTO>{
       return new ReturnRoadmapDTO(await this.roadmapService.addRoadmap(dto))
    }

    @Get(':id')
    async getRoadmapRelations(@Param("id") id : number):Promise<ReturnRoadmapDTO>{
        return new ReturnRoadmapDTO(await this.roadmapService.getRoadmapRelations(id))
    }

    @Get()
    async getByQuery(@Query("stack") stack:string) : Promise<ReturnRoadmapDTO[]>{
        return await this.roadmapService.getByQuery(stack)
    }
}
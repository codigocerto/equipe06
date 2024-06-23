import { Body, Delete, Get, Param, Query } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoadmapEntity } from './entities/RoadmapEntity';
import { RoadmapService } from './roadmap.service';
import { ReturnRoadmapDTO } from './dto/returnRoadmap.dto';
import { stringify } from 'querystring';


@Controller('roadmap')
export class RoadmapController {

    constructor(private readonly roadmapService : RoadmapService){}

    @Post()
    async addRoadmap(@Body() dto : RoadmapEntity ) : Promise<ReturnRoadmapDTO>{
       return new ReturnRoadmapDTO(await this.roadmapService.addRoadmap(dto))
    }

    @Get(':id')
    async getRoadmapRelations(@Param("id") id : string):Promise<ReturnRoadmapDTO>{
        return new ReturnRoadmapDTO(await this.roadmapService.getRoadmapRelations(id))
    }

    @Get()
    async getByQuery(@Query("stack") stack:string) : Promise<ReturnRoadmapDTO[]>{
        return await this.roadmapService.getByQuery(stack)
    }

    @Delete(':id')
    async delete(@Param("id") id : string){
        return await this.roadmapService.delete(id)
    }
}

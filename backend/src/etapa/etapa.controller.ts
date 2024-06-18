import { Body, Controller, Param, Post } from '@nestjs/common';
import { EtapaService } from './etapa.service';
import { EtapaEntity } from './entities/EtapaEntity';
import { retry } from 'rxjs';
import { ReturnEtapaDTO } from './dto/returnEtapa.dto';
import { ReturnRoadmapDTO } from 'src/roadmap/dto/returnRoadmap.dto';

@Controller('etapa')
export class EtapaController {

    constructor(private readonly etapaService : EtapaService){}

    @Post(":id")
    async addEtapa(@Body() dto : EtapaEntity , @Param("id") id : string){
       return new ReturnEtapaDTO(await this.etapaService.addEtapa(dto,id))
    }
}


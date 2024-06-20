import { Body, Controller, Param, Post } from '@nestjs/common';
import { EtapaService } from './etapa.service';
import { EtapaEntity } from './entities/EtapaEntity';

import { ReturnEtapaDTO } from './dto/returnEtapa.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('etapa')
export class EtapaController {

    constructor(private readonly etapaService : EtapaService){}

    @Post(":id")
    async addEtapa(@Body() dto : EtapaEntity , @Param("id") id : string){
       return new ReturnEtapaDTO(await this.etapaService.addEtapa(dto,id))
    }
}


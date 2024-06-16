import { Body, Controller, Param, Post } from '@nestjs/common';
import { EtapaService } from './etapa.service';
import { EtapaEntity } from './entities/EtapaEntity';
import { retry } from 'rxjs';
import { ReturnEtapaDTO } from './dto/returnEtapa.dto';

@Controller('etapa')
export class EtapaController {

    constructor(private readonly etapaService : EtapaService){}

    @Post(":id")
    async addEtapa(@Body() dto : EtapaEntity , @Param("id") id : number){
       return new ReturnEtapaDTO(await this.etapaService.addEtapa(dto,id))
    }
}


import { Body, Controller, Post } from '@nestjs/common';
import { SacEntity } from './entities/SacEntity';
import { SacService } from './sac.service';

@Controller('sac')
export class SacController {

    constructor(private readonly sacService : SacService){}

    @Post()
    async insertSac(@Body() dto : SacEntity ){
        return await this.sacService.insertSac(dto)
    }
}

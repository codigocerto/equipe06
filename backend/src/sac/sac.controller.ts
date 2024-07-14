import { Body, Controller, Get, Post } from '@nestjs/common';
import { SacEntity } from './entities/SacEntity';
import { SacService } from './sac.service';
import { SacDTO } from './dto/SacDTO.dto';

@Controller('sac')
export class SacController {

    constructor(private readonly sacService : SacService){}

    @Post()
    async insertSac(@Body() dto : SacEntity ){
        return await this.sacService.insertSac(dto)
    }

    
    @Get()
    async returnForms(): Promise<SacDTO[]> {
        return await this.sacService.returnForms();
    }
}

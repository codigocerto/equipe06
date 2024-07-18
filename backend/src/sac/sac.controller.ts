import { Body, Controller, Get, Post } from '@nestjs/common';
import { SacEntity } from './entities/SacEntity';
import { SacService } from './sac.service';
import { SacDTO } from './dto/SacDTO.dto';
import { SendEmailService } from 'src/send-email/send-email.service';

@Controller('sac')
export class SacController {

    constructor(private readonly sacService : SacService,
        private readonly sendEmail : SendEmailService
    ){}

    @Post()
    async insertSac(@Body() dto : SacEntity ){
        const sac =  await this.sacService.insertSac(dto)


        return sac
    }

    
    @Get()
    async returnForms(): Promise<SacDTO[]> {
        return await this.sacService.returnForms();
    }
}

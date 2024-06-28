import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VoluntarioService } from './voluntario.service';
import { VoluntarioEntity } from './entities/VoluntarioEntities';
import { VoluntariadoEntity } from './entities/VoluntariadoEntities';
import { SendEmailService } from 'src/send-email/send-email.service';

@Controller('voluntario')
export class VoluntarioController {

    constructor(
        private readonly voluntarioService : VoluntarioService,
        private readonly sendEmail : SendEmailService
    ){}

    @Post()
    async vagas(@Body() obj : VoluntarioEntity){
        return await this.voluntarioService.vagas(obj)
    }

    @Post(":id")
    async voluntariado(@Body() dto : VoluntariadoEntity , @Param('id') id : string){

        return await this.voluntarioService.selectionVacancies(dto , id)

    }

    @Get(":id")
    async getAllVoluntarios(@Param("id") id : string){
        return await this.voluntarioService.getAllVoluntarios(id)
    }

}

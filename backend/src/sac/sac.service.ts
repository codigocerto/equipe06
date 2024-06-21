import { Injectable } from '@nestjs/common';
<<<<<<< HEAD

@Injectable()
export class SacService {}
=======
import { InjectRepository } from '@nestjs/typeorm';
import { SacEntity } from './entities/SacEntity';
import { Repository } from 'typeorm';
import { SendEmailService } from 'src/send-email/send-email.service';

@Injectable()
export class SacService {

    
    constructor(
        @InjectRepository(SacEntity)
        private readonly sacRepository: Repository<SacEntity>,
        private readonly sendEmailService : SendEmailService
    ) {}

    async insertSac(dto : SacEntity){
        
        if(!dto.date){
            dto.date = Date()
        }
        const addSac = await this.sacRepository.save(dto)
        
        // this.sendEmailService.sendEmail(addSac)
        // console.log( this.sendEmailService.sendEmail(addSac))

        return("Formulario enviado com sucesso")
        
    }


}
>>>>>>> upstream/develop

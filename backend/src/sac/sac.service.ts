import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SacEntity } from './entities/SacEntity';
import { Repository } from 'typeorm';
import { SendEmailService } from 'src/send-email/send-email.service';
import { SacDTO } from './dto/SacDTO.dto';
import * as template from './sac.template';

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
    
        await this.sendEmailService.sendMail(
            process.env.EMAIL_USER,
            'Formulario enviado com sucesso',
            template.textoEmail(dto.name,dto.email,dto.content)
        )
        
        await this.sendEmailService.sendMail(
            dto.email,
            "Obrigado pelo contato!",
            template.textoEmailObrigado(dto.name)
        )

        return("Formulario enviado com sucesso")
        
    }

    async returnForms(): Promise<SacDTO[]> {
        const findForms : SacEntity[] = await this.sacRepository.find()

        const sacDTO : SacDTO[] = findForms.map(dto => ({
            name : dto.name,
            email : dto.email,
            content : dto.content,
            date: dto.date

        }))

        return sacDTO;
    }


}

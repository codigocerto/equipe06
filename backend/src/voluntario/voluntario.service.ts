import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { VoluntarioEntity } from './entities/VoluntarioEntities';
import { VoluntariadoEntity } from './entities/VoluntariadoEntities';
import { SendEmailService } from 'src/send-email/send-email.service';
import {v4 as uuidv4} from "uuid";
import * as template from './voluntario.template';

@Injectable()
export class VoluntarioService {

    constructor(
        @InjectRepository(VoluntarioEntity)
        private readonly voluntarioRepository : Repository<VoluntarioEntity>,

        @InjectRepository(VoluntariadoEntity)
        private readonly voluntariadoRepository : Repository<VoluntariadoEntity>,

        private readonly sendEmailService : SendEmailService
    ){}

    async vagas(obj : VoluntarioEntity){
        if(!obj.id){
            obj.id = uuidv4()
        }
        const novasVagas = await this.voluntarioRepository.save(obj)
        

        return novasVagas
    }

    private async findVacanciesById(id : string) {
        const find =await this.voluntarioRepository.findOne({
            where : {
                id : id
            }
        })

        return find
    }

    async selectionVacancies(obj : VoluntariadoEntity , id : string){
        if(!obj.id){
            obj.id = uuidv4()
        }
        const checkVga = await this.findVacanciesById(id)

        if(!checkVga){
            throw new Error("Vaga indisponivel no momento1")
        }

        checkVga.qtdVacancies = checkVga.qtdVacancies - 1

        if(checkVga.qtdVacancies < 0 ){
            throw new Error("Vaga indisponivel no momento")
        }
        this.voluntarioRepository.save(checkVga)
        obj.vaga_id = id
        const add = await this.voluntariadoRepository.save(obj)

        await this.sendEmailService.sendMail(
            obj.email,
            `Inscrição Bem-Sucedida`,
            template.textoInscricaoObrigado(obj.name, checkVga.title)
        )
        
        await this.sendEmailService.sendMail(
            process.env.EMAIL_USER,
            `Nova Inscrição Bem-Sucedida`,
            template.textoInscricaoNova(obj.name,checkVga.title)
        )

        return add

    }

    async getAllVoluntarios(id : string){
        const find = await this.voluntarioRepository.findOne({
            where: {
                id : id
            },relations:['person']
        })

        return find
    }

   
}

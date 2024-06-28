import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { Repository } from 'typeorm';
import { VoluntarioEntity } from './entities/VoluntarioEntities';
import { VoluntariadoEntity } from './entities/VoluntariadoEntities';
import { SendEmailService } from 'src/send-email/send-email.service';
import {v4 as uuidv4} from "uuid"

@Injectable()
export class VoluntarioService {

    constructor(
        @InjectRepository(VoluntarioEntity)
        private readonly voluntarioRepository : Repository<VoluntarioEntity>,

        @InjectRepository(VoluntariadoEntity)
        private readonly voluntariadoRepository : Repository<VoluntariadoEntity>,

        private readonly sendEmail : SendEmailService
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
            throw new Error("Vaga indisponivel no momento2")
        }
        this.voluntarioRepository.save(checkVga)
        obj.vaga_id = id
        const add = await this.voluntariadoRepository.save(obj)

        this.sendEmail.sendEmail(obj , checkVga.title)

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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnrollmentEntity } from './entities/EnrollmentEntity';
import { Repository } from 'typeorm';
import {v4 as uuidv4} from "uuid"
import { EnrollmentDTO } from './dtos/EnrollmentDTO.dto';
import { SendEmailService } from 'src/send-email/send-email.service';
import * as template from './enrollment.template';

@Injectable()
export class EnrollmentService {

    constructor(
        @InjectRepository(EnrollmentEntity)
        private readonly enrollmentRepository: Repository<EnrollmentEntity>,
        private readonly sendEmailService : SendEmailService
      ) {}
    
    async insertEnrollment(dto : EnrollmentEntity){
        try {
            if(!dto.id){
                dto.id = uuidv4()
            }
            if(!dto.email || !dto.name || !dto.phone || !dto.hability ){
                throw new Error(`Field name , email , phone or hability are empty`)
            }
            await this.sendEmailService.sendMail(
                dto.email,
                'Inscrição Bem-Sucedida',
                template.textoInscricaoObrigado(dto.name, dto.hability)
              );
              
            await this.sendEmailService.sendMail(
                process.env.EMAIL_USER,
                'Nova Inscrição Bem-Sucedida',
                template.textoInscricaoNova(dto.name, dto.hability)
            );
            return this.enrollmentRepository.save(dto)
        } catch (error) {
            throw new Error(`Failed to insert enrollment: ${error.message}`);
        }
      
    }

    async findEnrollment() : Promise<EnrollmentDTO[]>{
        const enrollments : EnrollmentEntity[] = await this.enrollmentRepository.find()


        const enrollmentDtos: EnrollmentDTO[] = enrollments.map(enrollment => ({
            name: enrollment.name,
            email: enrollment.email,
            phone: enrollment.phone,
            hability: enrollment.hability,
        })); //MAPEIA A ENTIDADE VINDA DO BANCO E TRANSFORMA OS DADOS PARA UM DTO, PARA QUE NAO SEJA RETORNADO O ID DO USUARIO
        
        return enrollmentDtos;
    }
}

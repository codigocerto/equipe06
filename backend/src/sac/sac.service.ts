import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SacEntity } from './entities/SacEntity';
import { Repository } from 'typeorm';

@Injectable()
export class SacService {

    
    constructor(
        @InjectRepository(SacEntity)
        private readonly sacRepository: Repository<SacEntity>,
    ) {}

    async insertSac(dto : SacEntity){
        const validEmail = await this.sacRepository.findOne({where : {
            email: dto.email
        }})

        if(!validEmail){
            return this.sacRepository.save(dto)
        }else{
            throw new Error("Email ja cadastrado")
        }

        
    }


}

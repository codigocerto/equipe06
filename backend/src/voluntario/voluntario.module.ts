import { Module } from '@nestjs/common';
import { VoluntarioController } from './voluntario.controller';
import { VoluntarioService } from './voluntario.service';
import { SendEmailService } from 'src/send-email/send-email.service';
import { VoluntariadoEntity } from './entities/VoluntariadoEntities';
import { VoluntarioEntity } from './entities/VoluntarioEntities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([VoluntarioEntity , VoluntariadoEntity])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService, SendEmailService],
})
export class VoluntarioModule {}

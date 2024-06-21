import { Module } from '@nestjs/common';
import { VoluntarioController } from './voluntario.controller';
import { VoluntarioService } from './voluntario.service';
<<<<<<< HEAD

@Module({
  controllers: [VoluntarioController],
  providers: [VoluntarioService]
=======
import { SendEmailService } from 'src/send-email/send-email.service';
import { VoluntariadoEntity } from './entities/VoluntariadoEntities';
import { VoluntarioEntity } from './entities/VoluntarioEntities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([VoluntarioEntity , VoluntariadoEntity])],
  controllers: [VoluntarioController],
  providers: [VoluntarioService, SendEmailService],
>>>>>>> upstream/develop
})
export class VoluntarioModule {}

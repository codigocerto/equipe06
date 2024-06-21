import { Module } from '@nestjs/common';
import { SacService } from './sac.service';
<<<<<<< HEAD

@Module({
  providers: [SacService]
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { SacEntity } from './entities/SacEntity';
import { SendEmailService } from 'src/send-email/send-email.service';

@Module({
  imports:[TypeOrmModule.forFeature([SacEntity])],
  providers: [SacService , SendEmailService]
>>>>>>> upstream/develop
})
export class SacModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendEmailService } from './send-email.service';
import { SendEmailDTO } from './dto/SendEmail.dto';

@Module({
    imports:[TypeOrmModule.forFeature([SendEmailDTO])],
    providers: [SendEmailService]
  })
export class SendEmailModule {}

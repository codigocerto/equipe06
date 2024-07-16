import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentEntity } from './entities/EnrollmentEntity';
import { SendEmailService } from 'src/send-email/send-email.service';

@Module({
  imports:[TypeOrmModule.forFeature([EnrollmentEntity])],
  providers: [EnrollmentService , SendEmailService],
  controllers: [EnrollmentController]
})
export class EnrollmentModule {}

import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnrollmentEntity } from './entities/EnrollmentEntity';

@Module({
  imports:[TypeOrmModule.forFeature([EnrollmentEntity])],
  providers: [EnrollmentService],
  controllers: [EnrollmentController]
})
export class EnrollmentModule {}

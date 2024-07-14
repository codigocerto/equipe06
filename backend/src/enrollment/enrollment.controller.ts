import { Body, Controller, Get, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentEntity } from './entities/EnrollmentEntity';
import { EnrollmentDTO } from './dtos/EnrollmentDTO.dto';

@Controller('enrollment')
export class EnrollmentController {


    constructor(private readonly enrollmentService : EnrollmentService){}

    @Post()
    async insertEnrollment(@Body() dto : EnrollmentEntity){
        return new EnrollmentDTO(await this.enrollmentService.insertEnrollment(dto))
    }

    @Get()
    async findEnrollment() : Promise<EnrollmentDTO[]>{
        return await this.enrollmentService.findEnrollment()
    }
}

import { Module } from '@nestjs/common';
import { VoluntarioController } from './voluntario.controller';
import { VoluntarioService } from './voluntario.service';

@Module({
  controllers: [VoluntarioController],
  providers: [VoluntarioService]
})
export class VoluntarioModule {}

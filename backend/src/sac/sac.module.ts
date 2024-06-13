import { Module } from '@nestjs/common';
import { SacService } from './sac.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SacEntity } from './entities/SacEntity';

@Module({
  imports:[TypeOrmModule.forFeature([SacEntity])],
  providers: [SacService]
})
export class SacModule {}

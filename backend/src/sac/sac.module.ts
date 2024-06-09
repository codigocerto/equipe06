import { Module } from '@nestjs/common';
import { SacService } from './sac.service';

@Module({
  providers: [SacService]
})
export class SacModule {}

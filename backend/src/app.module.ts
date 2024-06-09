import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SacController } from './sac/sac.controller';
import { SacModule } from './sac/sac.module';
import { VoluntarioModule } from './voluntario/voluntario.module';
import { RoadmapModule } from './roadmap/roadmap.module';

@Module({
  imports: [SacModule, VoluntarioModule, RoadmapModule],
  controllers: [AppController, SacController],
  providers: [AppService],
})
export class AppModule {}

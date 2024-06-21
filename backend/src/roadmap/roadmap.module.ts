import { Module } from '@nestjs/common';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';
<<<<<<< HEAD

@Module({
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoadmapEntity } from './entities/RoadmapEntity';


@Module({
  imports:[TypeOrmModule.forFeature([RoadmapEntity])],
>>>>>>> upstream/develop
  controllers: [RoadmapController],
  providers: [RoadmapService]
})
export class RoadmapModule {}

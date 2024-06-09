import { Test, TestingModule } from '@nestjs/testing';
import { SacController } from './sac.controller';

describe('SacController', () => {
  let controller: SacController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SacController],
    }).compile();

    controller = module.get<SacController>(SacController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

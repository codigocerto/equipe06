import { Test, TestingModule } from '@nestjs/testing';
import { EtapaController } from './etapa.controller';

describe('EtapaController', () => {
  let controller: EtapaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtapaController],
    }).compile();

    controller = module.get<EtapaController>(EtapaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

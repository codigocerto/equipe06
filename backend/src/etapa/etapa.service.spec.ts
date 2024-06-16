import { Test, TestingModule } from '@nestjs/testing';
import { EtapaService } from './etapa.service';

describe('EtapaService', () => {
  let service: EtapaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtapaService],
    }).compile();

    service = module.get<EtapaService>(EtapaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

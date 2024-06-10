import { Test, TestingModule } from '@nestjs/testing';
import { SacService } from './sac.service';

describe('SacService', () => {
  let service: SacService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SacService],
    }).compile();

    service = module.get<SacService>(SacService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

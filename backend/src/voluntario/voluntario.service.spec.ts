import { Test, TestingModule } from '@nestjs/testing';
import { VoluntarioService } from './voluntario.service';

describe('VoluntarioService', () => {
  let service: VoluntarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoluntarioService],
    }).compile();

    service = module.get<VoluntarioService>(VoluntarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

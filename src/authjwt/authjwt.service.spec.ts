import { Test, TestingModule } from '@nestjs/testing';
import { AuthjwtService } from './authjwt.service';

describe('AuthjwtService', () => {
  let service: AuthjwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthjwtService],
    }).compile();

    service = module.get<AuthjwtService>(AuthjwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TestcrudcodeService } from './testcrudcode.service';

describe('TestcrudcodeService', () => {
  let service: TestcrudcodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestcrudcodeService],
    }).compile();

    service = module.get<TestcrudcodeService>(TestcrudcodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

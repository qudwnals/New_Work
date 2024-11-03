import { Test, TestingModule } from '@nestjs/testing';
import { TestcrudcodeController } from './testcrudcode.controller';

describe('TestcrudcodeController', () => {
  let controller: TestcrudcodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestcrudcodeController],
    }).compile();

    controller = module.get<TestcrudcodeController>(TestcrudcodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

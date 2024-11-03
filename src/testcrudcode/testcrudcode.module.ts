import { Module } from '@nestjs/common';
import { TestcrudcodeController } from './testcrudcode.controller';
import { TestcrudcodeService } from './testcrudcode.service';

@Module({
  controllers: [TestcrudcodeController],
  providers: [TestcrudcodeService],
})
export class TestcrudcodeModule {}

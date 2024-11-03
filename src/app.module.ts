import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicModule } from './basic/basic.module';
import { TestcrudcodeController } from './testcrudcode/testcrudcode.controller';
import { TestcrudcodeService } from './testcrudcode/testcrudcode.service';
import { TestcrudcodeModule } from './testcrudcode/testcrudcode.module';

@Module({
  imports: [BasicModule, TestcrudcodeModule],
  controllers: [AppController, TestcrudcodeController],
  providers: [AppService, TestcrudcodeService],
})
export class AppModule {}

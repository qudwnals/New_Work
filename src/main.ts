import { NestFactory } from '@nestjs/core';
import { BasicModule } from './basic/basic.module';
import { TestcrudcodeModule } from './testcrudcode/testcrudcode.module';
//import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const testcrudcode = await NestFactory.create(TestcrudcodeModule);
  await testcrudcode.listen(3000);
}
bootstrap();

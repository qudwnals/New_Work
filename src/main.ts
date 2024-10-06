import { NestFactory } from '@nestjs/core';
import { BasicModule } from './basic/basic.module';
//import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const basic = await NestFactory.create(BasicModule);
  await basic.listen(3000);
}
bootstrap();

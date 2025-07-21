import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
declare const module: any


async function bootstrap() {
  dotenv.config()
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

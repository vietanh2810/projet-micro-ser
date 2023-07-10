import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request } from 'express';

export interface CustomRequest extends Request {
  user: number; // or any other type
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

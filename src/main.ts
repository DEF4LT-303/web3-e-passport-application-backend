import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // strips unknown properties
      forbidNonWhitelisted: true, // throws if unknown props are present
      transform: true,            // automatically transforms types using `@Type()`
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

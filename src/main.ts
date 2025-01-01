import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { configureError } from './core/error/error.config';
import { configureSwagger } from './core/swagger/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  configureSwagger(app);
  configureError(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

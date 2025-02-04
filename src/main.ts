import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  console.log(`Server is running on http://localhost:${port}`);
  await app.listen(3000);
}
bootstrap();

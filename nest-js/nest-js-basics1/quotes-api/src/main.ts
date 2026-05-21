import { NestFactory } from '@nestjs/core';
import { QuotesModule } from './quotes.module';

async function bootstrap() {
  const app = await NestFactory.create(QuotesModule);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

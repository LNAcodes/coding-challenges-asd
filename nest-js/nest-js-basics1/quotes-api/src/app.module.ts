import { Module } from '@nestjs/common';
import { QuotesModule } from './quotes.module';

@Module({
  imports: [QuotesModule],
})
export class AppModule {}

import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getQuotes(): object[] {
    return this.quotesService.getAllQuotes();
  }

  @Get('random')
  getRandomQuotes(): object {
    return this.quotesService.getRandomQuotes();
  }
}

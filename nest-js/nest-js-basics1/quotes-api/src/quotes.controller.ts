import { Controller, Get, Query } from '@nestjs/common';
import { QuotesService, type Quote } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  getQuotes(@Query('author') author: string): Quote[] {
    if (author) {
      return this.quotesService.getQuotesByAuthor(author);
    } else return this.quotesService.getAllQuotes();
  }

  @Get('random')
  getRandomQuotes(): Quote {
    return this.quotesService.getRandomQuotes();
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CountryService } from './country.service';
import { Country } from 'prisma/generated/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly countryService: CountryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('country/:code')
  async getCountryByCode(@Param('code') code: string): Promise<Country | null> {
    return this.countryService.getCountryByCode(code);
  }
}

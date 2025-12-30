import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Country } from '../prisma/generated/client';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getCountryByCode(code: string): Promise<Country | null> {
    return this.prisma.country.findFirst({
      where: {
        Code: code,
      },
    });
  }
}

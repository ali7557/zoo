import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service'; // 1. Import the CatService

@Controller('cat')
export class CatController {
  // 2. Inject the CatService here
  constructor(private readonly catService: CatService) {}

  @Get()
  public getHello(): string {
    return this.catService.getHello(); // This returns "MYEW"
  }
  
  @Get('greet')
  public introduce(): string {
    return this.catService.introduce(); // This returns "My name is TOM!"
  }
}
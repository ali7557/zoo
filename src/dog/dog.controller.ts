import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service'; // Make sure this is DogService!

@Controller('dog')
export class DogController {
  // Inject the DogService here
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello(); // This returns "WOW-WOW"
  }
  
  @Get('greet')
  public introduce(): string {
    return this.dogService.introduce(); // This returns "My name is REx!"
  }
}
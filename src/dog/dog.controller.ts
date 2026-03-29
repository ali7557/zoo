import { Controller, Get } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
    @Controller('cat')
    export class CatController {
    constructor(private readonly dogService: DogService) {}
    
    
    @Get()
    public getHello(): string{
        return this.dogService.getHello();
    }
    
    @Get('greet')
    public introduce(): string{
        return this.dogService.introduce();
    }
}

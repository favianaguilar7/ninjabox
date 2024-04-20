// stand.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { StandService } from './stand.service';
import { Stand } from './stand.entity';

@Controller('stands')
export class StandController {
    constructor(private readonly standService: StandService) { }

    @Get()
    async getAllStands(): Promise<Stand[]> {
        return this.standService.getAllStands();
    }

    @Get(':id')
    async getStandById(@Param('id') id: string): Promise<Stand> {
        return this.standService.getStandById(+id);
    }
}

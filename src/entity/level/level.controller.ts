// level.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';
import { Level } from './level.entity';

@Controller('levels')
export class LevelController {
    constructor(private readonly levelService: LevelService) { }

    @Get()
    async getAllLevels(): Promise<Level[]> {
        return this.levelService.getAllLevels();
    }

    @Get(':id')
    async getLevelById(@Param('id') id: string): Promise<Level> {
        return this.levelService.getLevelById(+id);
    }
}

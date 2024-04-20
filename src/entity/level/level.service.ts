// level.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from './level.entity';

@Injectable()
export class LevelService {
    constructor(
        @InjectRepository(Level)
        private levelRepository: Repository<Level>,
    ) { }

    async getAllLevels(): Promise<Level[]> {
        return this.levelRepository.find();
    }

    async getLevelById(id: number): Promise<Level> {
        const level = await this.levelRepository.findOne({ where: { id } });
        if (!level) {
            throw new NotFoundException(`Level with id ${id} not found`);
        }
        return level;
    }
}

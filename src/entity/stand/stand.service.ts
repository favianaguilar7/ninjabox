import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stand } from './stand.entity';

@Injectable()
export class StandService {
    constructor(
        @InjectRepository(Stand)
        private standRepository: Repository<Stand>,
    ) { }

    async getAllStands(): Promise<Stand[]> {
        return this.standRepository.find();
    }

    async getStandById(id: number): Promise<Stand> {
        const stand = await this.standRepository.findOne({ where: { id } }); // Pasamos el ID dentro de un objeto de opciones de búsqueda
        if (!stand) {
            throw new NotFoundException(`Stand with id ${id} not found`);
        }
        return stand;
    }
}

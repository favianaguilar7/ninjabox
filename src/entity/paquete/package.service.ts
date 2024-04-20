// package.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Package } from './paquete.entity';
import { CreatePackageDto } from './package.dto';

@Injectable()
export class PackageService {
    constructor(
        @InjectRepository(Package)
        private packageRepository: Repository<Package>,
    ) { }

    async getAllPackages(): Promise<Package[]> {
        return this.packageRepository.find();
    }

    async getPackageById(id: number): Promise<Package> {
        const paquete = await this.packageRepository.findOne({ where: { id } });
        if (!paquete) {
            throw new NotFoundException(`Package with id ${id} not found`);
        }
        return paquete;
    }

    async createPackage(createPackageDto: CreatePackageDto): Promise<Package> {
        const newPackage = this.packageRepository.create(createPackageDto);
        return this.packageRepository.save(newPackage);
    }
}

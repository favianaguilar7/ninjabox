// package.controller.ts

import { Controller, Get, Param } from '@nestjs/common';
import { PackageService } from './package.service';
import { Package } from './paquete.entity';

@Controller('packages')
export class PackageController {
    constructor(private readonly packageService: PackageService) { }

    @Get()
    async getAllPackages(): Promise<Package[]> {
        return this.packageService.getAllPackages();
    }

    @Get(':id')
    async getPackageById(@Param('id') id: string): Promise<Package> {
        return this.packageService.getPackageById(+id);
    }
}

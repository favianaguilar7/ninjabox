// package.controller.ts

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PackageService } from './package.service';
import { Package } from './paquete.entity';
import { CreatePackageDto } from './package.dto';

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

    @Post()
    async createPackage(@Body() createPackageDto: CreatePackageDto): Promise<Package> {
        return this.packageService.createPackage(createPackageDto);
    }

}

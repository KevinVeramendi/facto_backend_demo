// Controlador que expone los endpoints para gestionar empresas
import { Controller, Get, Post, Body, Param, Put, Query } from '@nestjs/common';
import { CompanyService } from '../application/use-cases/company.service';
import { CreateCompanyDto } from '../application/dto/create-company.dto';
import { UpdateCompanyDto } from '../application/dto/update-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post()
    create(@Body() dto: CreateCompanyDto) {
        return this.companyService.create(dto);
    }

    @Get()
    findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.companyService.findById(+id);
    }

    @Get('ruc/')
    findByRuc(@Query('ruc') ruc: string) {
        return this.companyService.findByRuc(ruc);
    }

    @Get('businessName/:buninessName')
    findByBusinessName(@Param('buninessName') buninessName: string) {
        return this.companyService.findByBusinessName(buninessName);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
        return this.companyService.update(+id, dto);
    }
}

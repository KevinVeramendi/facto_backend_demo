// Controlador que expone los endpoints para gestionar empresas
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CompanyService } from '../application/use-cases/company.service';
import { CreateCompanyDto } from '../application/dto/create-company.dto';
import { UpdateCompanyDto } from '../application/dto/update-company.dto';

@Controller('companies')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) { }

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

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
        return this.companyService.update(+id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.companyService.delete(+id);
    }
}

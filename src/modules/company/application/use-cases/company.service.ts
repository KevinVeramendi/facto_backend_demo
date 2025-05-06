// Casos de uso del negocio(crear, editar, eliminar, buscar empresas)
import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../../domain/repository/company.repository';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { CompanyMapper } from '../mappers/company.mapper';

@Injectable()
export class CompanyService {
    constructor(private readonly companyRepo: CompanyRepository) { }

    create(data: CreateCompanyDto) {
        const company = CompanyMapper.fromCreateDto(data);
        return this.companyRepo.create(company);
    }

    findAll() {
        return this.companyRepo.findAll();
    }

    findById(id: number) {
        return this.companyRepo.findById(id);
    }

    update(id: number, data: UpdateCompanyDto) {
        return this.companyRepo.update(id, data);
    }

    delete(id: number) {
        return this.companyRepo.delete(id);
    }
}

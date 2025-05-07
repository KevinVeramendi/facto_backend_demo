// Casos de uso del negocio(crear, editar, eliminar, buscar empresas)
import { Injectable } from '@nestjs/common';
import { CompanyRepository } from '../../domain/repository/company.repository';
import { CreateCompanyDto } from '../dto/create-company.dto';
import { UpdateCompanyDto } from '../dto/update-company.dto';
import { CompanyMapper } from '../mappers/company.mapper';

@Injectable()
export class CompanyService {
    constructor(private readonly companyRepository: CompanyRepository) {}

    create(data: CreateCompanyDto) {
        const company = CompanyMapper.fromCreateDto(data);
        return this.companyRepository.create(company);
    }

    findAll() {
        return this.companyRepository.findAll();
    }

    findById(id: number) {
        return this.companyRepository.findById(id);
    }

    findByRuc(ruc: string) {
        return this.companyRepository.findByRuc(ruc);
    }

    findByBusinessName(businessName: string) {
        return this.companyRepository.findByBusinessName(businessName);
    }

    update(id: number, data: UpdateCompanyDto) {
        return this.companyRepository.update(id, data);
    }

    delete(id: number) {
        return this.companyRepository.delete(id);
    }
}

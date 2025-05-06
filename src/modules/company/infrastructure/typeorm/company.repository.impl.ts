// Implementa la lógica real para persistir empresas con TypeORM
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repository/company.repository';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
    constructor(
        @InjectRepository(Company)
        private readonly repo: Repository<Company>,
    ) { }

    create(company: Company): Promise<Company> {
        return this.repo.save(company);
    }

    findAll(): Promise<Company[]> {
        return this.repo.find();
    }

    async findById(id: number): Promise<Company> {
        const company = await this.repo.findOneBy({ id });
        if (!company) {
            throw new Error(`Company with ID ${id} not found`);
        }
        return company;
    }

    update(id: number, data: Partial<Company>): Promise<Company> {
        return this.repo.save({ id, ...data });
    }

    async delete(id: number): Promise<void> {
        await this.repo.delete(id);
    }
}

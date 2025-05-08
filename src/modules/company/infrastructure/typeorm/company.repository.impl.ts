import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../../domain/entities/company.entity';
import { CompanyRepository } from '../../domain/repository/company.repository';

@Injectable()
export class CompanyRepositoryImpl implements CompanyRepository {
    constructor(
        @InjectRepository(Company)
        private readonly repository: Repository<Company>,
    ) {}

    async findByBusinessName(businessName: string): Promise<Company> {
        const company = await this.repository.findOne({
            where: { companyBusinessName: businessName },
        });
        if (!company) {
            throw new Error(`Company with Ruc ${businessName} not found`);
        }
        return company;
    }

    async findByRuc(ruc: string): Promise<Company> {
        const company = await this.repository.findOne({
            where: { companyRuc: ruc },
        });
        if (!company) {
            throw new Error(`Company with Ruc ${ruc} not found`);
        }
        return company;
    }

    create(company: Company): Promise<Company> {
        return this.repository.save(company);
    }

    findAll(): Promise<Company[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<Company> {
        const company = await this.repository.findOneBy({ companyId: id });
        if (!company) {
            throw new Error(`Company with ID ${id} not found`);
        }
        return company;
    }

    update(id: number, data: Partial<Company>): Promise<Company> {
        return this.repository.save({ companyId: id, ...data });
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

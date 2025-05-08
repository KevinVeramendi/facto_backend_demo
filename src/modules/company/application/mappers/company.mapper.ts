//  Transforma un DTO en una entidad del dominio
import { Company } from '../../domain/entities/company.entity';
import { CreateCompanyDto } from '../dto/create-company.dto';

export class CompanyMapper {
    static fromCreateDto(dto: CreateCompanyDto): Company {
        const company = new Company();
        company.companyRuc = dto.companyRuc;
        company.companyBusinessName = dto.companyBusinessName;
        company.companySoapUser = dto.companySoapUser;
        company.companySoapPassword = dto.companySoapPassword;
        company.companyCertificate = dto.companyCertificate;
        company.companyCertificatePassword = dto.companyCertificatePassword;
        company.companyDetraction = dto.companyDetraction;
        company.companyDomain = dto.companyDomain;
        company.companyState = dto.companyState;
        company.createdAt = dto.createdAt;
        company.updatedAt = dto.updatedAt;
        return company;
    }
}

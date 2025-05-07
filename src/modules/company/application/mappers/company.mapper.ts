//  Transforma un DTO en una entidad del dominio
import { Company } from '../../domain/entities/company.entity';
import { CreateCompanyDto } from '../dto/create-company.dto';

export class CompanyMapper {
    static fromCreateDto(dto: CreateCompanyDto): Company {
        const company = new Company();
        company.businessName = dto.businessName;
        company.tradeName = dto.tradeName;
        company.ruc = dto.ruc;
        company.address = dto.address;
        company.ubigeo = dto.ubigeo;
        return company;
    }
}

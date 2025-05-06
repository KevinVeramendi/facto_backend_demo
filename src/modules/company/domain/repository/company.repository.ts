// Contrato que define lo que un repositorio de empresa debe implementar
import { Company } from '../entities/company.entity';

export abstract class CompanyRepository {
  abstract create(company: Company): Promise<Company>;
  abstract findAll(): Promise<Company[]>;
  abstract findById(id: number): Promise<Company>;
  abstract update(id: number, company: Partial<Company>): Promise<Company>;
  abstract delete(id: number): Promise<void>;
}

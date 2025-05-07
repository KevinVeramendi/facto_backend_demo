import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './presentation/company.controller';
import { CompanyService } from './application/use-cases/company.service';
import { Company } from './domain/entities/company.entity';
import { CompanyRepositoryImpl } from './infrastructure/typeorm/company.repository.impl';
import { CompanyRepository } from './domain/repository/company.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    controllers: [CompanyController],
    providers: [
        CompanyService,
        {
            provide: CompanyRepository,
            useClass: CompanyRepositoryImpl,
        },
    ],
})
export class CompanyModule {}

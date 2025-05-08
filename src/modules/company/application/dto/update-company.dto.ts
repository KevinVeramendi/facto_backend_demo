import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Timestamp } from 'typeorm';

export class UpdateCompanyDto {
    @IsString()
    companyRuc?: string;
    @IsString()
    companyBusinessName?: string;
    @IsString()
    companyTradeName?: string;
    @IsString()
    companySoapUser?: string;
    @IsString()
    companySoapPassword?: string;
    @IsString()
    companyCertificate?: string;
    @IsString()
    companyCertificatePassword?: string;
    @IsString()
    companyDetraction?: string;
    @IsString()
    companyDomain?: string;
    @IsBoolean()
    companyState?: boolean;
    @IsDate()
    createdAt?: Date;
    @IsDate()
    updatedAt?: Date;
}

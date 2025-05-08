import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class CreateCompanyDto {
    @IsString()
    companyRuc: string;
    @IsString()
    companyBusinessName: string;
    @IsString()
    companyTradeName: string;
    @IsOptional()
    @IsString()
    companySoapUser?: string;
    @IsOptional()
    @IsString()
    companySoapPassword?: string;
    @IsOptional()
    @IsString()
    companyCertificate?: string;
    @IsOptional()
    @IsString()
    companyCertificatePassword?: string;
    @IsString()
    companyDetraction: string;
    @IsOptional()
    @IsString()
    companyDomain?: string;
    @IsBoolean()
    companyState: boolean;
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    createdAt?: Date;
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    updatedAt?: Date;
}

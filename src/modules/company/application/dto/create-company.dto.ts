import { IsEmail, IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
    @IsString()
    businessName: string;
    @IsString()
    tradeName: string;
    @IsEmpty()
    @IsString()
    ruc: string;
    @IsString()
    address: string;
    @IsString()
    ubigeo: string;
}

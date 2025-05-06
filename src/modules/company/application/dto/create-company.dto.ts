// Estructura de datos que llega desde el cliente para crear una empresa
export class CreateCompanyDto {
    businessName: string;
    tradeName: string;
    ruc: string;
    address: string;
    ubigeo: string;
}

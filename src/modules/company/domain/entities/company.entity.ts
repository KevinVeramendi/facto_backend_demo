import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Representa el modelo de negocio de la empresa
@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    businessName: string;
    @Column()
    tradeName: string;
    @Column()
    ruc: string;
    @Column()
    address: string;
    @Column()
    ubigeo: string;
}

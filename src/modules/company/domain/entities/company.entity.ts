import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

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
    @JoinColumn()
    @Column()
    ubigeo: string;
}

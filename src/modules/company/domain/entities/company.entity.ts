import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('company')
export class Company {
    @PrimaryGeneratedColumn()
    companyId: number;
    @Column()
    companyRuc: string;
    @Column()
    companyBusinessName: string;
    @Column({ default: null })
    companySoapUser?: string;
    @Column({ default: null })
    companySoapPassword?: string;
    @Column({ default: null })
    companyCertificate?: string;
    @Column({ default: null })
    companyCertificatePassword?: string;
    @Column()
    companyDetraction: string;
    @Column({ default: null })
    companyDomain?: string;
    @Column()
    companyState: boolean;
    @CreateDateColumn({ default: null })
    createdAt?: Date;
    @UpdateDateColumn({ default: null })
    updatedAt?: Date;
}

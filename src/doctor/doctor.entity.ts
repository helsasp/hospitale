import  { Patient } from '../patient/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;   

    @Column()   
    specialization: string;

    @Column()
    phone: string;

    @Column()       
    email: string;

    @OneToMany(() => Patient, (patient: Patient) => patient.doctor)   
    patients : Patient[];       
}
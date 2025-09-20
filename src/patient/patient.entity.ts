import { Entity, PrimaryGeneratedColumn, Column,ManyToOne, JoinColumn } from 'typeorm';
import { Doctor } from '../doctor/doctor.entity';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    patientId: string;

    @Column()
    name: string;   

    @Column()   
    age: number;

    @Column()
    phone: string;

    @Column()       
    email: string;


    
    @ManyToOne(() => Doctor, (doctor: Doctor) => doctor.patients, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'doctorId' })
    doctor: Doctor;

    @Column()
    doctorId: number;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
    
}
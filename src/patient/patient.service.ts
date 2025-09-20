import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepo: Repository<Patient>,
  ) {}

  // Get semua pasien
  findAll(): Promise<Patient[]> {
    return this.patientRepo.find({
      relations: ['doctor'], // kalau mau include data dokter
    });
  }

  // Get pasien berdasarkan ID
  async findOne(id: number): Promise<Patient> {
    const patient = await this.patientRepo.findOne({
      where: { id },
      relations: ['doctor'], // ikutkan dokter
    });
    if (!patient) {
      throw new Error(`Patient with id ${id} not found`);
    }
    return patient;
  }

  // Tambah pasien baru
  create(data: Partial<Patient>): Promise<Patient> {
    const patient = this.patientRepo.create(data); 
    return this.patientRepo.save(patient);
  }

  // Update pasien
  async update(id: number, data: Partial<Patient>): Promise<Patient> {
    await this.patientRepo.update(id, data);
    const updatedPatient = await this.patientRepo.findOne({
      where: { id },
      relations: ['doctor'],
    });
    if (!updatedPatient) {
      throw new Error(`Patient with id ${id} not found`);
    }
    return updatedPatient;
  }

  // Hapus pasien
  async remove(id: number): Promise<void> {
    await this.patientRepo.delete(id);
  }
}

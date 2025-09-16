import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private doctorRepo: Repository<Doctor>,
  ) {}

  // Get semua dokter
  findAll(): Promise<Doctor[]> {
    return this.doctorRepo.find();
  }

  // Get dokter berdasarkan ID
  async findOne(id: number): Promise<Doctor> {
    const doctor = await this.doctorRepo.findOneBy({ id });
    if (!doctor) {
      throw new Error(`Doctor with id ${id} not found`);
    }
    return doctor;
  }

  // Tambah dokter baru
  create(data: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.doctorRepo.create(data); // buat entity baru
    return this.doctorRepo.save(doctor);         // simpan ke DB
  }

  // Update dokter
  async update(id: number, data: Partial<Doctor>): Promise<Doctor> {
    await this.doctorRepo.update(id, data);           // update
    const updatedDoctor = await this.doctorRepo.findOneBy({ id }); // ambil data terbaru
    if (!updatedDoctor) {
      throw new Error(`Doctor with id ${id} not found`);
    }
    return updatedDoctor;
  }

  // Hapus dokter
  async remove(id: number): Promise<void> {
    await this.doctorRepo.delete(id);
  }
}

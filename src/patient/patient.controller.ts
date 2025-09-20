import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';

@Controller('patients') // base URL: /doctors
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  // GET /doctors → ambil semua dokter
  @Get('json')
  findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  // GET /doctors/:id → ambil dokter berdasarkan ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Patient> {
    return this.patientService.findOne(id);
  }

  // POST /doctors → tambah dokter baru
  @Post()
  create(@Body() data: Partial<Patient>): Promise<Patient> {
    return this.patientService.create(data);
  }

  // PUT /doctors/:id → update dokter
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Patient>): Promise<Patient> {
    return this.patientService.update(id, data);
  }

  // DELETE /doctors/:id → hapus dokter
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.patientService.remove(id);
  }
}

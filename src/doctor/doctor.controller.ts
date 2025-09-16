import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller('doctors') // base URL: /doctors
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  // GET /doctors → ambil semua dokter
  @Get('json')
  findAll(): Promise<Doctor[]> {
    return this.doctorService.findAll();
  }

  // GET /doctors/:id → ambil dokter berdasarkan ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Doctor> {
    return this.doctorService.findOne(id);
  }

  // POST /doctors → tambah dokter baru
  @Post()
  create(@Body() data: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.create(data);
  }

  // PUT /doctors/:id → update dokter
  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.update(id, data);
  }

  // DELETE /doctors/:id → hapus dokter
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.doctorService.remove(id);
  }
}

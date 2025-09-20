import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('/doctors')
  showDoctors(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'doctor', 'index.html'));
  }

  @Get('/doctor-edit.html')
  showDoctorEdit(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'doctor', 'doctor-edit.html'));
  }

  @Get('/doctor-create.html')
  showDoctorCreate(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'doctor', 'doctor-create.html'));
  }

  @Get('/patients')
  showPatients(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'patient', 'index.html'));
  }

  @Get('/patient-create.html')
  showPatientCreate(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'patient', 'patient-create.html'));
  }

  @Get('/patient-edit.html')
  showPatientEdit(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'public', 'patient', 'patient-edit.html'));
  }
}

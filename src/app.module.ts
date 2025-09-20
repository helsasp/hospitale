import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppController } from './app.controller';
import { Doctor } from './doctor/doctor.entity';
import { Patient } from './patient/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'helsasp',
      database: 'hospital_app',
      entities: [Doctor, Patient],
      autoLoadEntities: true,
      synchronize: true, // buat dev aja, auto-create tabel
    }),
    DoctorModule,PatientModule
  ],
  controllers: [AppController],
})
export class AppModule {}

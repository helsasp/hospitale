import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorModule } from './doctor/doctor.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'helsasp',
      database: 'hospital_app',
      autoLoadEntities: true,
      synchronize: true, // buat dev aja, auto-create tabel
    }),
    DoctorModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandService } from './entity/stand/stand.service';
import { StandController } from './entity/stand/stand.controller';
import { Stand } from './entity/stand/stand.entity';
import { Level } from './entity/level/level.entity';
import { LevelController } from './entity/level/level.controller';
import { LevelService } from './entity/level/level.service';
import { Package } from './entity/paquete/paquete.entity';
import { PackageController } from './entity/paquete/package.controller';
import { PackageService } from './entity/paquete/package.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'ninjabox',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Stand]),
    TypeOrmModule.forFeature([Level]),
    TypeOrmModule.forFeature([Package]),
  ],
  controllers: [AppController, StandController, LevelController, PackageController],
  providers: [AppService, StandService, LevelService, PackageService],
})
export class AppModule {}

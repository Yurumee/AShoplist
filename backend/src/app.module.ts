import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComprasModule } from './compras/compras.module.js';

@Module({
  imports: [ComprasModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'process.env'
    }),
    
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_URL'),
        entities: [import.meta.dirname + '/**/*.entity{.ts,.js}'],
        // apenas para desenvolvimento
        synchronize: true
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

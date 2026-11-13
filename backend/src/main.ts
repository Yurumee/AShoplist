import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // permissão do CORS
  app.enableCors({
    methods: 'GET, POST, DELETE, PATCH',
    // regex para o cors deve permitir todas as rotas começando com 'http://localhost:5173/'
    origin: [/^http:\/\/localhost:5173$/],
    allowedHeaders: 'Content-Type, Authorization'

  })
  
  app.useGlobalPipes(
    // valida se o dto e o body condizem em dados e tipos
    new ValidationPipe({
      // dados não presentes no dto são descartados
      whitelist: true
    })
  )

  await app.listen(process.env.NEST_PORT ?? 3001);
}
await bootstrap();

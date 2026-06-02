import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      excludeExtraneousValues: true,
    }),
  );

  const isDevelopment = process.env.NODE_ENV !== 'production';

  if (isDevelopment) {
    console.log('Swagger UI is active (Development)');

    const config = new DocumentBuilder()
      .setTitle('Cyber Chat API')
      .setDescription('Threads, messages, and comments')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
  } else {
    console.log('Swagger UI is deactivated (Production');
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

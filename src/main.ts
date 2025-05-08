import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Options, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );
    const PORT = process.env.PORT ?? 3000;
    await app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}
bootstrap();

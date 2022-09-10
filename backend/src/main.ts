import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/http-exception.filter'
import { ValidationPipe} from '@nestjs/common'
import { LoggingInterceptor } from './common/intercepter/logger.interceptor';
import { TransformInterceptor } from './common/intercepter/transform.interceptor';
import { TimeoutInterceptor } from './common/intercepter/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new TimeoutInterceptor());
  await app.listen(3000);
}
bootstrap();

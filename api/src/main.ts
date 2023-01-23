import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  })
  
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
  // app.useGlobalFilters(new TableExceptionFilter())
  // app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(3000)
  console.log(`API is running on: ${await app.getUrl()}`)
}
bootstrap()

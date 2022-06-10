import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import cookie, { FastifyCookieOptions } from "@fastify/cookie";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors();

  app.register(cookie, {
    secret: process.env.SECRET_COOKIE_WORD,
    parseOptions: {},
  } as FastifyCookieOptions);

  await app.listen(process.env.PORT, () => {
    console.log(`Server runing on port: ${process.env.PORT}`);
  });
}

bootstrap();

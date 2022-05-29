import { NestFactory, HttpAdapterHost } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AllExceptionsFilter } from "./middlewares/allExceptions.filter";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  /* const { httpAdapter } = app.get(HttpAdapterHost);

  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter)); */

  await app.listen(process.env.PORT, () => {
    console.log(`Server runing on port: ${process.env.PORT}`);
  });
}

bootstrap();

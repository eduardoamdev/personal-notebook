import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticlesModule } from "./modules/articles/articles.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.local"],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    AuthenticationModule,
    ArticlesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

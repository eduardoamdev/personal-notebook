import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticlesModule } from "./modules/articles/articles.module";
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.local"],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    ArticlesModule,
    UsersModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

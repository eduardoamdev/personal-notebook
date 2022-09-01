import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Article, ArticleSchema } from "./schemas/article.schema";
import { Token, TokenSchema } from "./schemas/token.schema";
import { User, UserSchema } from "./schemas/user.schema";
import { InjectInfo } from "./scripts/injectInfo.command";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.local"],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB),
    MongooseModule.forFeature([
      { name: Article.name, schema: ArticleSchema },
      { name: Token.name, schema: TokenSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [InjectInfo],
})
export class AppModule {}

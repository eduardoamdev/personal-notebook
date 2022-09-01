import { Command, CommandRunner } from "nest-commander";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../schemas/user.schema";
import { Article, ArticleDocument } from "../schemas/article.schema";
import { Token, TokenDocument } from "../schemas/token.schema";
import getUsers from "../resources/getUsers";
import getArticles from "../resources/getArticles";
import getTokens from "../resources/getTokens";

@Command({
  name: "injectInfo",
  options: { isDefault: false },
})
export class InjectInfo implements CommandRunner {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
    @InjectModel(Token.name)
    private tokenModel: Model<TokenDocument>,
  ) {}

  async run(): Promise<void> {
    try {
      const users = getUsers();
      const articles = getArticles();
      const tokens = getTokens();

      await this.userModel.deleteMany();

      console.log("Users have been deleted succesfully");

      for (let i = 0; i < users.length; i++) {
        const newUser = await this.userModel.create(users[i]);

        console.log(
          `A new user has been created with the following name: ${newUser.username}`,
        );
      }

      await this.articleModel.deleteMany();

      console.log("Articles have been deleted succesfully");

      for (let i = 0; i < articles.length; i++) {
        const newArticle = await this.articleModel.create(articles[i]);

        console.log(
          `A new article has been created with the following title: ${newArticle.title}`,
        );
      }

      await this.tokenModel.deleteMany();

      console.log("Tokens have been deleted succesfully");

      for (let i = 0; i < tokens.length; i++) {
        const newToken = await this.tokenModel.create(tokens[i]);

        console.log(`The following token has been created: ${newToken.token}`);
      }
    } catch (error) {
      console.log(`There is the following error: ${error}`);
    }
  }
}

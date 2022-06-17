import { Injectable } from "@nestjs/common";
import { ArticleInterface } from "./interfaces/article.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Article, ArticleDocument } from "./schemas/article.schema";
import { ErrorService } from "../../middlewares/error.service";

@Injectable()
export class ArticlesService {
  articleRegex = /^\s*$/;

  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
    private readonly errorService: ErrorService,
  ) {}

  async articles() {
    try {
      return await this.articleModel.find().select("title content timestamp");
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async article(id: string) {
    try {
      const foundArticle = await this.articleModel
        .findById(id)
        .select("title content timestamp");

      this.errorService.checkNullResponseFromDB(foundArticle);

      return foundArticle;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async create(article: ArticleInterface) {
    try {
      this.errorService.checkRegex(this.articleRegex);

      return await this.articleModel.create(article);
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async update(id: string, article: ArticleInterface) {
    try {
      this.errorService.checkRegex(this.articleRegex.test(article.title));
      this.errorService.checkRegex(this.articleRegex.test(article.content));

      const updatedArticle = await this.articleModel.findByIdAndUpdate(
        id,
        article,
        {
          new: true,
        },
      );

      this.errorService.checkNullResponseFromDB(updatedArticle);

      return updatedArticle;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async delete(id: string) {
    try {
      const deletedArticle = await this.articleModel.findByIdAndDelete(id);

      this.errorService.checkNullResponseFromDB(deletedArticle);

      return deletedArticle;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }
}

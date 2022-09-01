import { Injectable } from "@nestjs/common";
import { ArticleInterface } from "./interfaces/article.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Article, ArticleDocument } from "./schemas/article.schema";
import { Error } from "../../middlewares/error";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
    private readonly errorService: Error,
  ) {}

  async articles() {
    try {
      const foundArticles = await this.articleModel
        .find()
        .select("title content");

      this.errorService.checkNullResponseFromDB(foundArticles);

      return foundArticles;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async article(id: string) {
    try {
      const foundArticle = await this.articleModel
        .findById(id)
        .select("title content");

      this.errorService.checkNullResponseFromDB(foundArticle);

      return foundArticle;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async create(article: ArticleInterface) {
    try {
      const createdArticle = await this.articleModel.create(article);

      this.errorService.checkNullResponseFromDB(createdArticle);

      return createdArticle;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async update(id: string, article: ArticleInterface) {
    try {
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

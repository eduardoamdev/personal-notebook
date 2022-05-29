import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { ArticleInterface } from "./interfaces/article.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Article, ArticleDocument } from "./schemas/article.schema";

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name)
    private articleModel: Model<ArticleDocument>,
  ) {}

  articles() {
    try {
      return this.articleModel.find().select("title content timestamp");
    } catch (error) {
      throw new HttpException("Server error", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async article(id: string) {
    try {
      const foundArticle = await this.articleModel
        .findById(id)
        .select("title content timestamp");

      if (foundArticle === null) {
        throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
      }

      return foundArticle;
    } catch (error) {
      console.log(error);
      if (error.response) {
        throw new HttpException(error.response, error.status);
      } else {
        throw new HttpException(
          "Server error",
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  create(article: ArticleInterface) {
    try {
      if (
        !article.title ||
        !article.content ||
        article.title === "" ||
        article.content === ""
      ) {
        console.log("entra");
        throw new HttpException(
          "Incorrect information",
          HttpStatus.BAD_REQUEST,
        );
      }

      return this.articleModel.create(article);
    } catch (error) {
      if (error.response) {
        throw new HttpException(error.response, error.status);
      } else {
        throw new HttpException(
          "Server error",
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  test() {
    throw new HttpException("eooo", HttpStatus.BAD_REQUEST);
  }
}

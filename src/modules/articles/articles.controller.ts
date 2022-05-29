import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { ArticleInterface } from "./interfaces/article.interface";

@Controller("articles")
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  articles() {
    return this.articlesService.articles();
  }

  @Get(":id")
  article(@Param("id") id: string) {
    return this.articlesService.article(id);
  }

  @Post("create")
  create(@Body("article") article: ArticleInterface) {
    return this.articlesService.create(article);
  }

  @Put("update/:id")
  update(@Param("id") id: string, @Body("article") article: ArticleInterface) {
    return this.articlesService.update(id, article);
  }

  @Delete("delete/:id")
  delete(@Param("id") id: string) {
    return this.articlesService.delete(id);
  }
}

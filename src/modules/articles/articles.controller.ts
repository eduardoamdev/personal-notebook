import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { ArticlesService } from "./articles.service";
import { ArticleInterface } from "./interfaces/article.dto";

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

  @Get("test")
  test() {
    return this.articlesService.test();
  }
}

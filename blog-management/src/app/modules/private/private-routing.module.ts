import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./components/home/home.component";
import { Articles } from "./components/articles/articles.component";
import { Article } from "./components/article/article.component";
import { NewArticle } from "./components/new-article/new-article.component";

const privateRoutes: Routes = [
  {
    path: "home",
    component: Home,
  },
  {
    path: "articles",
    component: Articles,
  },
  {
    path: "article/:id",
    component: Article,
  },
  {
    path: "newArticle",
    component: NewArticle,
  },
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

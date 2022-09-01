import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Home } from "./components/home/home.component";
import { Navbar } from "./components/navbar/navbar.component";
import { Articles } from "./components/articles/articles.component";
import { Article } from "./components/article/article.component";
import { NewArticle } from "./components/new-article/new-article.component";
import { UpdateArticle } from "./components/update-article/update-article.component";
import { DeleteArticle } from "./components/delete-article/delete-article.component";
import { PrivateRoutingModule } from "./private-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    Home,
    Navbar,
    Articles,
    Article,
    NewArticle,
    UpdateArticle,
    DeleteArticle,
  ],
  imports: [ReactiveFormsModule, CommonModule, PrivateRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PrivateModule {}

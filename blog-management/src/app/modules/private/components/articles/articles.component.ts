import { Component, OnInit, Input } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { article } from "../../../../interfaces/article.interface";

@Component({
  selector: "articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"],
})
export class Articles implements OnInit {
  @Input("articles") articles: article[] | undefined;

  loading: boolean = true;

  constructor(private apiCalls: ApiCalls) {}

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.apiCalls.getArticles().subscribe((res: any) => {
      this.articles = res;
      this.loading = false;
    });
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { article } from "../../../../interfaces/article.interface";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class Article implements OnInit {
  @Input("article") article: article = {
    _id: "",
    title: "",
    content: "",
  };

  loading: boolean = true;

  id: string = "";

  constructor(private apiCalls: ApiCalls, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    this.apiCalls.getArticle(this.id).subscribe((res: any) => {
      this.article = res;
      this.loading = false;
    });
  }
}

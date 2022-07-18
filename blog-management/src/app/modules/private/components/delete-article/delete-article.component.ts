import { Component, OnInit, Input } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "delete-article",
  templateUrl: "./delete-article.component.html",
  styleUrls: ["./delete-article.component.css"],
})
export class DeleteArticle implements OnInit {
  id: string = "";

  constructor(
    private apiCalls: ApiCalls,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {}

  deleteArticle() {
    this.apiCalls.deleteArticle(this.id).subscribe((data) => {
      this.router.navigate(["/private/articles"]);
    });
  }

  back() {
    this.router.navigate([`/private/article/${this.id}`]);
  }
}

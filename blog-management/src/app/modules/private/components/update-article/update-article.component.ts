import { Component, OnInit, Input } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { article } from "../../../../interfaces/article.interface";

@Component({
  selector: "update-article",
  templateUrl: "./update-article.component.html",
  styleUrls: ["./update-article.component.css"],
})
export class UpdateArticle implements OnInit {
  @Input("article") article: article = {
    _id: "",
    title: "",
    content: "",
  };

  loading: boolean = true;

  form: FormGroup;

  id: string = "";

  validationError: boolean;

  constructor(
    private apiCalls: ApiCalls,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.validationError = false;
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
    });
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.getArticle();
  }

  async getArticle() {
    this.apiCalls.getArticle(this.id).subscribe((res: any) => {
      this.article = res;
      this.form.patchValue({ title: res.title, content: res.content });
      this.loading = false;
    });
  }

  submit(event: Event) {
    event.preventDefault();

    const value = this.form.value;

    this.apiCalls.updateArticle(this.id, value).subscribe(
      (res: any) => {
        this.validationError = false;
        this.router.navigate([`/private/article/${this.id}`]);
      },
      (err) => {
        this.validationError = true;
      }
    );
  }
}

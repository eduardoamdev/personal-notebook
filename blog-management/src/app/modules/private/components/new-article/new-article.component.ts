import { Component, OnInit } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "new-article",
  templateUrl: "./new-article.component.html",
  styleUrls: ["./new-article.component.css"],
})
export class NewArticle implements OnInit {
  form: FormGroup;

  validationError: boolean;

  constructor(private apiCalls: ApiCalls, private router: Router) {
    this.validationError = false;
    this.form = new FormGroup({
      title: new FormControl("", [Validators.required]),
      content: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit(event: Event) {
    event.preventDefault();

    const value = this.form.value;

    /* this.apiCalls.newArticle(value).subscribe(
      (res: any) => {
        this.validationError = false;
        this.router.navigate(["/private/articles"]);
      },
      (err) => {
        this.validationError = true;
      }
    ); */
  }
}

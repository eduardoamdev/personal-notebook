import { Component, OnInit, ResolvedReflectiveFactory } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiCalls } from "../../../../services/api-calls.service";
import { environment } from "../../../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class Login implements OnInit {
  form: FormGroup;
  validationError: boolean;

  constructor(private apiCalls: ApiCalls, private router: Router) {
    this.validationError = false;
    this.form = new FormGroup({
      username: new FormControl(environment.username, [Validators.required]),
      password: new FormControl(environment.password, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit(event: Event) {
    event.preventDefault();

    const value = this.form.value;

    this.apiCalls.login(value.username, value.password).subscribe(
      (res: any) => {
        this.validationError = false;
        this.router.navigate(["/private/home"]);
      },
      (err) => {
        this.validationError = true;
      }
    );
  }
}

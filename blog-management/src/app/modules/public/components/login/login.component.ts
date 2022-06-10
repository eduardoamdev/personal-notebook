import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiCalls } from "../../../../services/api-calls.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  minUsernameLength: number = 4;
  minPasswordLength: number = 8;

  constructor(private apiCalls: ApiCalls) {
    this.form = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(this.minUsernameLength),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(this.minPasswordLength),
      ]),
    });
  }

  submit(event: Event) {
    event.preventDefault();

    const value = this.form.value;

    this.apiCalls
      .login(value.username, value.password)
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  ngOnInit(): void {}
}

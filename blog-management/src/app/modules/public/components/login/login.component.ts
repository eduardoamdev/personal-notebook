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

  constructor(private apiCalls: ApiCalls) {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
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

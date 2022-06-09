import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  save(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }

  ngOnInit(): void {}
}

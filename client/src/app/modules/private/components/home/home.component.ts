import { Component, OnInit, Input } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class Home implements OnInit {
  @Input("username") username: string = "";

  loading: boolean = true;

  constructor(private apiCalls: ApiCalls) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.apiCalls.getUser().subscribe((res: any) => {
      this.username = res.username;
      this.loading = false;
    });
  }
}

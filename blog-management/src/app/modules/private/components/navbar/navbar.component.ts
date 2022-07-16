import { Component, OnInit } from "@angular/core";
import { ApiCalls } from "../../../../services/api-calls.service";
import { Router } from "@angular/router";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class Navbar implements OnInit {
  constructor(private apiCalls: ApiCalls, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.apiCalls.logout().subscribe((res: any) => {
      this.router.navigate(["/"]);
    });
  }
}

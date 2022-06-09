import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { LoginComponent } from "./components/login/login.component";
import { PublicRoutingModule } from "./public-routing.module";

@NgModule({
  declarations: [FrontPageComponent, LoginComponent],
  imports: [CommonModule, PublicRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PublicModule {}

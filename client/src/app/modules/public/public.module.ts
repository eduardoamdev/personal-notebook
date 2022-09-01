import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FrontPage } from "./components/front-page/front-page.component";
import { Login } from "./components/login/login.component";
import { PublicRoutingModule } from "./public-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FrontPage, Login],
  imports: [ReactiveFormsModule, CommonModule, PublicRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PublicModule {}

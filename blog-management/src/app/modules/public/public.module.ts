import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { LoginComponent } from "./components/login/login.component";
import { PublicRoutingModule } from "./public-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FrontPageComponent, LoginComponent],
  imports: [ReactiveFormsModule, CommonModule, PublicRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PublicModule {}

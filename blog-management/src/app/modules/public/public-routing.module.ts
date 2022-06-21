import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FrontPageComponent } from "./components/front-page/front-page.component";
import { LoginComponent } from "./components/login/login.component";

const publicRoutes: Routes = [
  {
    path: "",
    component: FrontPageComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

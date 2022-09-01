import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FrontPage } from "./components/front-page/front-page.component";
import { Login } from "./components/login/login.component";

const publicRoutes: Routes = [
  {
    path: "",
    component: FrontPage,
  },
  {
    path: "login",
    component: Login,
  },
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}

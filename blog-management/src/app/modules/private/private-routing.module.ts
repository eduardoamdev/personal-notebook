import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Home } from "./components/home/home.component";
import { Articles } from "./components/articles/articles.component";

const privateRoutes: Routes = [
  {
    path: "home",
    component: Home,
  },
  {
    path: "articles",
    component: Articles,
  },
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

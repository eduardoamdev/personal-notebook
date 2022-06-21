import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitialPageComponent } from "./components/initial-page/initial-page.component";

const privateRoutes: Routes = [
  {
    path: "initial-page",
    component: InitialPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}

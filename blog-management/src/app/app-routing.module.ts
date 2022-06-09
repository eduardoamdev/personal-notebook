import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicModule } from "./modules/public/public.module";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () => {
      return PublicModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

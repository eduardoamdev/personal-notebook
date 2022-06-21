import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicModule } from "./modules/public/public.module";
import { PrivateModule } from "./modules/private/private.module";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () => {
      return PublicModule;
    },
  },
  {
    path: "private",
    loadChildren: () => {
      return PrivateModule;
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { InitialPageComponent } from "./components/initial-page/initial-page.component";
import { Navbar } from "./components/navbar/navbar.component";
import { PrivateRoutingModule } from "./private-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [InitialPageComponent, Navbar],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PrivateModule {}

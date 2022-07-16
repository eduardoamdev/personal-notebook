import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Home } from "./components/home/home.component";
import { Navbar } from "./components/navbar/navbar.component";
import { Articles } from "./components/articles/articles.component";
import { PrivateRoutingModule } from "./private-routing.module";

@NgModule({
  declarations: [Home, Navbar, Articles],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [],
  bootstrap: [],
})
export class PrivateModule {}

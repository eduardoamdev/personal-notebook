import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PublicModule } from "./modules/public/public.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { PrivateModule } from "./modules/private/private.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Injectable, CanActivate } from "@nestjs/common";

@Injectable()
export class AdministrationGuard implements CanActivate {
  canActivate(): boolean {
    console.log("Hello guard");
    return true;
  }
}

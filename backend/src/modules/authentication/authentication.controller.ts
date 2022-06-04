import { Controller, Post, Body } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { LoginInterface } from "./interfaces/login.interface";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("login")
  login(@Body("login") login: LoginInterface) {
    return this.authenticationService.login(login);
  }
}

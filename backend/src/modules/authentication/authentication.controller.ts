import { Controller, Post, Body } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { LoginInterface } from "./interfaces/login.interface";
import { UserInterface } from "./interfaces/user.interface";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("createUser")
  create(@Body("user") user: UserInterface) {
    return this.authenticationService.create(user);
  }

  @Post("login")
  login(@Body("login") login: LoginInterface) {
    return this.authenticationService.login(login);
  }
}

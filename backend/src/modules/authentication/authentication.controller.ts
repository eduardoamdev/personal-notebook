import { Controller, Post, Body, Res, Get, Query } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { UserInterface } from "./interfaces/user.interface";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("createUser")
  create(@Body("user") user: UserInterface) {
    return this.authenticationService.create(user);
  }

  @Get("login")
  async login(
    @Query("login") login: string,
    @Res({ passthrough: true }) response,
  ) {
    const token = await this.authenticationService.login(login);

    response.status(200).cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 3600),
    });
  }
}

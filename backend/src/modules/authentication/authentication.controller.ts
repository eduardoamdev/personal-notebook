import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  Query,
  UseGuards,
  Req,
} from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { UserInterface } from "./interfaces/user.interface";
import { AuthenticationGuard } from "../../middlewares/authentication.guard";

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
      path: "/",
      httpOnly: true,
    });
  }

  @Get("logout")
  @UseGuards(AuthenticationGuard)
  async logout(@Req() request, @Res({ passthrough: true }) response) {
    await this.authenticationService.logout(request);

    response.status(200).clearCookie("token");
  }
}

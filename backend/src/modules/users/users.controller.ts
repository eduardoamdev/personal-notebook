import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthenticationGuard } from "../../middlewares/authentication.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("user")
  @UseGuards(AuthenticationGuard)
  user(@Request() request) {
    return this.usersService.user(request.headers.userId);
  }
}

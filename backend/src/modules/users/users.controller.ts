import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User, UserSchema } from "../authentication/schemas/user.schema";
import { AuthenticationGuard } from "../../middlewares/authentication.guard";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("user")
  user() {
    return this.usersService.user();
  }
}

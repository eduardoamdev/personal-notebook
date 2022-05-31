import { Controller, Post, Body } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserInterface } from "./interfaces/user.interface";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("createUser")
  create(@Body("user") user: UserInterface) {
    return this.usersService.create(user);
  }
}

import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { ErrorService } from "src/middlewares/error.service";

@Injectable()
export class UsersService {
  usernameRegex = /[a-zA-Z]+/;
  passwordRegex =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]){1})\S{8,16}$/;

  constructor(private readonly errorService: ErrorService) {}

  create(user) {
    try {
      this.errorService.checkRegex(this.usernameRegex.test(user.username));
      this.errorService.checkRegex(this.passwordRegex.test(user.password));

      user.password = bcrypt.hashSync(
        user.password,
        parseInt(process.env.SALT),
      );

      return user;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { ErrorService } from "../../middlewares/error.service";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class AuthenticationService {
  usernameRegex = /[a-zA-Z]+/;
  passwordRegex =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]){1})\S{8,16}$/;

  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private readonly errorService: ErrorService,
  ) {}

  async create(user) {
    try {
      this.errorService.checkRegex(this.usernameRegex.test(user.username));
      this.errorService.checkRegex(this.passwordRegex.test(user.password));

      const foundUsers = await this.userModel.find({
        username: user.username,
      });

      this.errorService.checkExistingElement("Username", foundUsers);

      user.password = bcrypt.hashSync(
        user.password,
        parseInt(process.env.SALT),
      );

      const newUser = await this.userModel.create(user);

      return `User ${newUser.username} has been created successfully`;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async login(login) {
    try {
      this.errorService.checkRegex(this.usernameRegex.test(login.username));
      this.errorService.checkRegex(this.passwordRegex.test(login.password));

      const foundUser = await this.userModel.findOne({
        username: login.username,
      });

      this.errorService.checkNullResponseFromDB(foundUser);

      const passwordIsValid = await bcrypt.compare(
        login.password,
        foundUser.password,
      );

      this.errorService.checkPassword(passwordIsValid);

      return login;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }
}

import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { Error } from "../../middlewares/error";
import { User, UserDocument } from "./schemas/user.schema";
import { Token, TokenDocument } from "./schemas/token.schema";
import { LoginInterface } from "./interfaces/login.interface";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthenticationService {
  usernameRegex = /[a-zA-Z]+/;
  passwordRegex =
    /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})(?=(?:.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]){1})\S{8,16}$/;

  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    @InjectModel(Token.name)
    private tokenModel: Model<TokenDocument>,
    private readonly errorService: Error,
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
      const processedLogin: LoginInterface = JSON.parse(login);

      const foundUser = await this.userModel.findOne({
        username: processedLogin.username,
      });

      this.errorService.checkNullResponseFromDB(foundUser);

      const passwordIsValid = await bcrypt.compare(
        processedLogin.password,
        foundUser.password,
      );

      this.errorService.checkPassword(passwordIsValid);

      const token = jwt.sign(
        { userId: foundUser._id },
        process.env.SECRET_TOKEN_WORD,
        {
          expiresIn: 3600,
        },
      );

      return `Bearer ${token}`;
    } catch (error) {
      this.errorService.throwError(error);
    }
  }

  async logout(request) {
    try {
      const token = request.cookies.token.slice(7);

      const newInvalidToken = await this.tokenModel.create({ token });

      this.errorService.checkNullResponseFromDB(newInvalidToken);
    } catch (error) {
      this.errorService.throwError(error);
    }
  }
}

import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../authentication/schemas/user.schema";
import { ErrorService } from "../../middlewares/error.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private readonly errorService: ErrorService,
  ) {}

  async user(id) {
    try {
      const foundUser = await this.userModel.findById(id, { password: 0 });

      this.errorService.checkNullResponseFromDB(foundUser);

      return { username: foundUser.username };
    } catch (error) {
      this.errorService.throwError(error);
    }
  }
}

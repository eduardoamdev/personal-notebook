import { Injectable } from "@nestjs/common";
import { UserInterface } from "../authentication/interfaces/user.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../authentication/schemas/user.schema";
import { ErrorService } from "../../middlewares/error.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private articleModel: Model<UserDocument>,
    private readonly errorService: ErrorService,
  ) {}

  async user() {
    return { user: "user" };
  }
}

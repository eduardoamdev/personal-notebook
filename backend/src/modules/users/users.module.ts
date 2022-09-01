import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "../authentication/schemas/user.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Error } from "../../middlewares/error";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [Error, UsersService],
})
export class UsersModule {}

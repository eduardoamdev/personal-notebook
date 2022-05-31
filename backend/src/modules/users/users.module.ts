import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ErrorService } from "../../middlewares/error.service";
import { User, UserSchema } from "./schemas/user.schema";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [ErrorService, UsersService],
})
export class UsersModule {}

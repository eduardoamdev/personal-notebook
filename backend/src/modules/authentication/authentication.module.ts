import { Module } from "@nestjs/common";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { ErrorService } from "../..//middlewares/error.service";
import { User, UserSchema } from "./schemas/user.schema";
import { Token, TokenSchema } from "./schemas/token.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Token.name, schema: TokenSchema },
    ]),
  ],
  controllers: [AuthenticationController],
  providers: [ErrorService, AuthenticationService],
})
export class AuthenticationModule {}

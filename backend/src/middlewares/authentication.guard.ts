import { Injectable, CanActivate, Req } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(@Req() request): boolean {
    let auth = false;
    if (request.args[0].raw.headers.cookie) {
      const token = request.args[0].raw.headers.cookie.split("=")[1].slice(9);
      jwt.verify(token, process.env.SECRET_TOKEN_WORD, (error, decoded) => {
        if (!error) {
          request.args[0].raw.headers.userId = decoded.userId;
          auth = true;
        }
      });
    }
    return auth;
  }
}

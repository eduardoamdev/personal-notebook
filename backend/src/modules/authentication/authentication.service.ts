import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticationService {
  login(login) {
    return login;
  }
}

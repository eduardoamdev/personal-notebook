import { Controller } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";

@Controller("authentication")
export class ArticlesController {
  constructor(private readonly authenticationService: AuthenticationService) {}
}

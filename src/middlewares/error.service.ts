import { HttpException, HttpStatus } from "@nestjs/common";

export class ErrorService {
  checkNullResponseFromDB(dbResponse) {
    if (dbResponse === null) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  throwError(error) {
    if (error.response) {
      throw new HttpException(error.response, error.status);
    } else {
      throw new HttpException("Server error", 500);
    }
  }
}

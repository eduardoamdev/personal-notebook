import { HttpException, HttpStatus } from "@nestjs/common";

export class Error {
  checkNullResponseFromDB(dbResponse) {
    if (dbResponse === null) {
      throw new HttpException("Bad request", HttpStatus.BAD_REQUEST);
    }
  }

  checkRegex(regex) {
    if (!regex) {
      throw new HttpException("Incorrect info", HttpStatus.BAD_REQUEST);
    }
  }

  checkExistingElement(element, foundElements) {
    if (foundElements.length !== 0) {
      throw new HttpException(
        `${element} already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  checkPassword(check) {
    if (!check) {
      throw new HttpException("Bad authentication", HttpStatus.BAD_REQUEST);
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

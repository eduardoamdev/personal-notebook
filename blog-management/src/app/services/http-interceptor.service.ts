import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError, catchError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    return throwError(
      `There is the following error: ${JSON.stringify(error.statusText)}`
    );
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Request has passed through the interceptor");
    return next.handle(req).pipe(catchError(this.handleError));
  }
}

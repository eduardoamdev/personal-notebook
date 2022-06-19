import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiCalls {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginInfo = { username, password };

    const result = "?" + new URLSearchParams(loginInfo).toString();

    const queriedProperties = result.split("?username=")[1].split("&password=");

    const httpQuery: string = `?login=%7B%22username%22%3A%22${queriedProperties[0]}%22,%20%22password%22%3A%22${queriedProperties[1]}%22%7D`;

    return this.http.get(`${this.baseUrl}/authentication/login${httpQuery}`);
  }
}

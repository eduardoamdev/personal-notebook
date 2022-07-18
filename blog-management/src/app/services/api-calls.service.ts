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

    const queriedLoginInfo = "?" + new URLSearchParams(loginInfo).toString();

    const queriedSeparatedInfo = queriedLoginInfo
      .split("?username=")[1]
      .split("&password=");

    const httpQuery: string = `?login=%7B%22username%22%3A%22${queriedSeparatedInfo[0]}%22,%20%22password%22%3A%22${queriedSeparatedInfo[1]}%22%7D`;

    return this.http.get(`${this.baseUrl}/authentication/login${httpQuery}`, {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.get(`${this.baseUrl}/authentication/logout`, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        cookie: document.cookie,
      },
    });
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/users/user`, {
      withCredentials: true,
    });
  }

  getArticles() {
    return this.http.get(`${this.baseUrl}/articles`, {
      withCredentials: true,
    });
  }

  getArticle(id: string) {
    return this.http.get(`${this.baseUrl}/articles/${id}`, {
      withCredentials: true,
    });
  }

  newArticle(article: any) {
    return this.http.post(
      `${this.baseUrl}/articles/create`,
      { article },
      {
        withCredentials: true,
      }
    );
  }

  updateArticle(id: string, article: any) {
    return this.http.put(
      `${this.baseUrl}/articles/update/${id}`,
      { article },
      {
        withCredentials: true,
      }
    );
  }

  deleteArticle(id: string) {
    return this.http.delete(`${this.baseUrl}/articles/delete/${id}`, {
      withCredentials: true,
    });
  }
}

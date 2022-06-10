import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiCalls {
  private articlesUrl: string = "http://localhost:3000/articles";

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(this.articlesUrl);
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class PortfolioService {
  private API_URL = ""; //change api path
  constructor(private http: HttpClient) {}

  //method for api hit with post method
  editProtfolio(data: any) {
    const obj = data;
    console.log(obj);
    return this.http.post(this.API_URL, obj);
  }
}

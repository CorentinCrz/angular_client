import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  private apiUrl: string

  constructor(
    private HttpClient: HttpClient
  ) {
    this.apiUrl = environment.apiUrl
  }

  // Method getItems post
  public getItems = (): Promise<any> => {
    return this.HttpClient.get(`${this.apiUrl}/merchant`).toPromise()
    .then(this.getData)
    .catch(this.handleError)
  }

  // Get the API response
  private getData(res: any){
    return res || {};
  };

  // Get the API error
  private handleError(err: any){
    return Promise.reject(err.error);
  };
}

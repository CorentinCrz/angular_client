import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserModel } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private HttpClient: HttpClient
  ) { }

  // Method register post
  public register = ( userData: UserModel ): Promise<any> => {
    const myHeader = new HttpHeaders();
    myHeader.append('Content-type', 'application/json')
    return this.HttpClient.post('https://mcba.dwsapp.io/api/auth/register', userData, {headers: myHeader}).toPromise()
    .then(this.getData)
    .catch(this.handleError)
  }

  // Method login post
  public login = ( userData: UserModel ): Promise<any> => {
    const myHeader = new HttpHeaders();
    myHeader.append('Content-type', 'application/json')
    return this.HttpClient.post('https://mcba.dwsapp.io/api/auth/login', userData, {headers: myHeader}).toPromise()
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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private Http:HttpClient) { }

  userSignUp(userData:any){
    return this.Http.post(`${baseUrl}/user/`,userData);
  }
}

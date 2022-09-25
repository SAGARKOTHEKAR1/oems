import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private Http:HttpClient) { }

  public signInStatusSubject = new Subject<boolean>();
  public getcurrentUser(){
    return this.Http.get(`${baseUrl}/current-user`);
  }

  public generateToken(signInData:any){
    return this.Http.post(`${baseUrl}/generate-token`,signInData);
  }

  public signInUser(token:any){
    localStorage.setItem('token',token.token);
    return true;
  }

  public issIgnIn(){
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true
    }
  }

  public signOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true
  }


  public getToken(){
    console.log("Get Token",localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.signOut();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    console.log('role User data ',user);
    return user.authorities[0].authority;
  }

}

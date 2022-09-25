import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInService } from '../singIn/sign-in.service';

@Injectable()
export class AuthInterCeptorInterceptor implements HttpInterceptor {

  constructor(private signinService:SignInService) {}
  id:number = 0;
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq  = request;
     this.id = this.id=1;
     const token = this.signinService.getToken();
     console.log(this.id,' interceptor ' + token);
     if(token != null){
      authReq = authReq.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
      })
     }
     
     console.log(this.id,"authReq 1"+authReq.headers+'Url'+authReq.url);
     
    return next.handle(authReq);
  }
}

export const AuthInterCeptorInterceptorProvider =[
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterCeptorInterceptor,
    multi: true,
  }
]

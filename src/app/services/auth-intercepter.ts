import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import{SigninService} from '../services/signin.service'
@Injectable()
export class AuthInercepter implements HttpInterceptor{
  constructor(private authservice:SigninService){}
  intercept(req:HttpRequest<any>,next : HttpHandler){
    const authToken = this.authservice.gettoken();
    const authRequest = req.clone({
      headers : req.headers.set('Authorization',"Bearer " + authToken)
    });
    //headers : req.headers.set('Authorization',"Bearer" + authToken);
// console.log( "Bearer" + authToken + 'ssss');

// Headers : ("Bearer" + authToken) ;
// console.log(Headers+'head');
    return next.handle(authRequest);

  }
}



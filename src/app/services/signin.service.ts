import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {AuthData} from '../modals/auth-data.modal';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private  isAuthenticated = false;
  private token : string;
  private tokenTimer:any;

  private authStatusListener = new Subject<boolean>();
  constructor(private http : HttpClient,private router:Router) { }



  gettoken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getIsAuth(){
   return this.isAuthenticated;
  }


  //create user
 createUser(email:string,password:string){
  const authData:AuthData = {email:email,password:password};

   this.http.post('http://localhost:3000/login/adminsignup',authData).subscribe(response=>{
     console.log(response);

   });


 }


 //login User
 loginuser(email:string,password:string){
   const authData:AuthData ={email:email,password:password};
   this.http.post<{status:boolean,token:string,expiresIn:number}>('http://localhost:3000/login/adminlogin',authData).subscribe(response =>{

     const token = response.token;
     this.token = token;

    console.log(token);

    //this.toast.success(response.status);
   //  console.log(response.status + 'access');

  // this.toast.success('Hello world!', 'Toastr fun!');

if(token){
 console.log(response.status + 'accessssss');
      const expiresInDuration = response.expiresIn;
      this.setAuthTimer(expiresInDuration);
      console.log(expiresInDuration + 'number');
      this.tokenTimer = setTimeout(()=>{
        this.logout();
      },expiresInDuration *1000
      );
      const now = new Date();
      const expirationDate = new Date( now.getTime() + expiresInDuration * 1000);
this.saveAuthData(token,expirationDate);
console.log(expirationDate);
    this.isAuthenticated = true;
    console.log(this.isAuthenticated+'authen');
    this.authStatusListener.next(true);
    this.router.navigate(['/default/s']);
    alert("login successfull");
console.log(response.status)
    } else {
      alert(status+"username password error");
    }


   })


 }


 //auth user

 autoAuthUser(){
   const newauthinformation = this.getAuthDAta();
   if(!newauthinformation){
     return;
   }
   const now = new Date();
   const expiresin = newauthinformation.expirationDate.getTime() - now.getTime();
   if(expiresin > 0){
     this.token = newauthinformation.token;
     this.isAuthenticated = true;
     this.setAuthTimer(expiresin/1000);
     this.authStatusListener.next(true);
   }
 }

 //logout

 logout(){
   this.token = null;
   this.isAuthenticated = false;
   this .authStatusListener.next(false);
   console.log(this.token);
   this.router.navigate(['/']);
   this.clearAuthData();
   clearTimeout(this.tokenTimer);
 }

//auth timer
 private setAuthTimer(duration:number){
   console.log(duration + "actual duration");
   this.tokenTimer = setTimeout(()=>{
     this.logout();
   },duration *1000)
 }

 //save auth
 private saveAuthData(token:string,expitatonDate:Date){
 localStorage.setItem('token',token);
 localStorage.setItem('expiration',expitatonDate.toISOString());
 }

 //clearauth
 private clearAuthData(){
   localStorage.removeItem("token");
   localStorage.removeItem("expiration")

 }


 private getAuthDAta(){
   const  token = localStorage.getItem("token");
   const expirationDate = localStorage.getItem("expiration");
   if(!token && !expirationDate){
     return;
   }
   return {
     token : token,
     expirationDate : new Date(expirationDate)

   }
 }
}




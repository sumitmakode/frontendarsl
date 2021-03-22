import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ SigninService } from '../services/signin.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private serve:SigninService) { }

  ngOnInit() {
  }

  onLogin(form : NgForm){
    if(form.invalid){
      alert("invalid");
      return;
    }
this.serve.loginuser(form.value.email,form.value.password);
  }
}

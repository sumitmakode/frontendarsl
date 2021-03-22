import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { SigninService } from '../services/signin.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  constructor(private serve : SigninService) { }

  ngOnInit() {
  }
  onSignup(form : NgForm){
    if(form.invalid){
      alert("invalid");
      return;
    }
    if(form.value.password == form.value.passwords){
this.serve.createUser(form.value.email,form.value.password);
form.reset()
    }
    else{
      alert("password not match");
    }
  }


}

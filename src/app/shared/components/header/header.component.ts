import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
//import {DeleteService } from '../services/delete.service';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private authstatussub : Subscription;
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private authservice:SigninService) { }

  ngOnInit() {

    this.authstatussub = this.authservice.getAuthStatusListener().subscribe();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  onLogout(){
    this.authservice.logout();

  }

}



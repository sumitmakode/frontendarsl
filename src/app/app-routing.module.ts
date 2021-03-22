import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [  { path: '', component: LoginComponent},
{path:'signup',component:SignupComponent},
{ path: 'default',component:DefaultComponent,
children:[
  {path:'s',component:DashboardComponent,canActivate:[AuthGaurd]},
  {path:'posts',component:PostsComponent,canActivate:[AuthGaurd]}
]


}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGaurd]
})
export class AppRoutingModule { }

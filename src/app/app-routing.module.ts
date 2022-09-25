import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { AdminGuard } from './pages/authGuard/adminguard/admin.guard';
import { UserGuard } from './pages/authGuard/userguard/user.guard';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserdashboardComponent } from './pages/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"",component:SigninComponent,pathMatch:"full"},
  {path:"signIn",component:SigninComponent,pathMatch:"full"},
  {path:"signUp",component:SignupComponent,pathMatch:"full"},
  {path:"admin",component:AdmindashboardComponent, pathMatch:'full', canActivate:[AdminGuard]},
  {path:"user",component:UserdashboardComponent, pathMatch:'full', canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

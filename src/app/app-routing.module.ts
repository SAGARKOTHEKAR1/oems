import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdcategoriesComponent } from './pages/adminpages/adcategories/adcategories.component';
import { AdmindashboardComponent } from './pages/adminpages/admindashboard/admindashboard.component';
import { AdminhomeComponent } from './pages/adminpages/adminhome/adminhome.component';
import { AdquizzesComponent } from './pages/adminpages/adquizzes/adquizzes.component';
import { ProfileComponent } from './pages/adminpages/profile/profile.component';
import { AddquestionComponent } from './pages/adminpages/questions/addquestion/addquestion.component';
import { UpdatequestionComponent } from './pages/adminpages/questions/updatequestion/updatequestion.component';
import { ViewquestionsComponent } from './pages/adminpages/questions/viewquestions/viewquestions.component';
import { QuizzesComponent } from './pages/adminpages/quizzes/quizzes.component';
import { UpdatecategoriesComponent } from './pages/adminpages/updatecategories/updatecategories.component';
import { UpdatequizzessComponent } from './pages/adminpages/updatequizzess/updatequizzess.component';
import { ViewcategoriesComponent } from './pages/adminpages/viewcategories/viewcategories.component';
import { AdminGuard } from './pages/authGuard/adminguard/admin.guard';
import { UserGuard } from './pages/authGuard/userguard/user.guard';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserdashboardComponent } from './pages/userpages/userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"",component:SigninComponent,pathMatch:"full"},
  {path:"signIn",component:SigninComponent,pathMatch:"full"},
  {path:"signUp",component:SignupComponent,pathMatch:"full"},
  {path:"admin",component:AdmindashboardComponent, canActivate:[AdminGuard],
  children:[
    {path:"home",component:AdminhomeComponent},
    {path:"profile",component:ProfileComponent},
    {path:"viewCategories",component:ViewcategoriesComponent},
    {path:"updateCategory/:id",component:UpdatecategoriesComponent},
    {path:"adCategories",component:AdcategoriesComponent},
    {path:"allquizzes",component:QuizzesComponent},
    {path:"adquizzes",component:AdquizzesComponent},
    {path:"Updatequize/:id",component:UpdatequizzessComponent},
    {path:"view-questions/:id/:title",component:ViewquestionsComponent},
    {path:"add-questions/:id/:title",component:AddquestionComponent},
    {path:"updateQuestions/:question_id/:title",component:UpdatequestionComponent},
    
  ]
},
  {path:"user",component:UserdashboardComponent, pathMatch:'full', canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

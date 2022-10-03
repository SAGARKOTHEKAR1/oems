import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterCeptorInterceptorProvider } from './pages/all-services/authInterCeptor/auth-inter-ceptor.interceptor';
import { AdmindashboardComponent } from './pages/adminpages/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './pages/userpages/userdashboard/userdashboard.component';
import { SidebarComponent } from './pages/adminpages/sidebar/sidebar.component';
import { AdminhomeComponent } from './pages/adminpages/adminhome/adminhome.component';
import { ProfileComponent } from './pages/adminpages/profile/profile.component';
import { ViewcategoriesComponent } from './pages/adminpages/viewcategories/viewcategories.component';
import { AdcategoriesComponent } from './pages/adminpages/adcategories/adcategories.component';
import { QuizzesComponent } from './pages/adminpages/quizzes/quizzes.component';
import { AdquizzesComponent } from './pages/adminpages/adquizzes/adquizzes.component';
import { UpdatecategoriesComponent } from './pages/adminpages/updatecategories/updatecategories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    SidebarComponent,
    AdminhomeComponent,
    ProfileComponent,
    ViewcategoriesComponent,
    AdcategoriesComponent,
    QuizzesComponent,
    AdquizzesComponent,
    UpdatecategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule

  ],
  providers: [AuthInterCeptorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

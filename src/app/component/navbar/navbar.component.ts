import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/pages/all-services/singIn/sign-in.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private signInService:SignInService, private router:Router) { }

  issignIn= false;
  user:any = null;
  ngOnInit(): void {
    this.issignIn = this.signInService.issIgnIn();
    this.user = this.signInService.getUser();
    this.signInService.signInStatusSubject.asObservable().subscribe((res)=>{
      console.log("log in user Value", res);
      this.issignIn = this.signInService.issIgnIn();
      this.user = this.signInService.getUser();
      
    })
  }

  public signOut(){
    this.signInService.signOut();
    this.signInService.signInStatusSubject.next(false);
    this.router.navigate([''])
  }

}

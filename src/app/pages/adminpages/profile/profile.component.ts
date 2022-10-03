import { Component, OnInit } from '@angular/core';
import { SignInService } from '../../all-services/singIn/sign-in.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  UserData:any
  constructor(private signService:SignInService) { }

  ngOnInit(): void {
    this.signService.getcurrentUser().subscribe((response)=>{
      this.UserData = response;
      console.log(this.UserData);
      
    },(error)=>{})
  }


}

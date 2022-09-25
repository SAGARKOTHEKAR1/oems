import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignUpService } from '../all-services/singUp/sign-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
hide=true;

signUp = new FormGroup({
  username: new FormControl('',[ Validators.required]),
    password: new FormControl('',[ Validators.required]),
    firstname: new FormControl('',[ Validators.required]),
    lastname: new FormControl('',[ Validators.required]),
    email: new FormControl('',[ Validators.required]),
    phone:new FormControl('',[ Validators.required])
});
  constructor(private signUpService:SignUpService, private router:Router) { }

  ngOnInit(): void {
  }
userSignUp(){
  console.log(this.signUp.value);
  this.signUpService.userSignUp(this.signUp.value).subscribe(
    (res)=>{
      console.log(res);
      Swal.fire('SuccessFully Done','Wel Come To Career Infotech','success');
      this.router.navigate([''])
    },
  (error)=>{
    console.log(error);
    
    Swal.fire('Something Went wrong','User Not Found','error');
  })
}
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignInService } from '../all-services/singIn/sign-in.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;
  signIn = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private signInService: SignInService, private router: Router) { }

  ngOnInit(): void {
  }
  userSignIn() {
    console.log(this.signIn.value);
    this.signInService.generateToken(this.signIn.value).subscribe(
      (response) => {
        console.log('get Token', response);
        this.signInService.signInUser(response);
        this.signInService.getcurrentUser().subscribe(
          (response) => {
            console.log("current User data", response);
            this.signInService.setUser(response);

            if (this.signInService.getUserRole() == "ADMIN") {
              this.router.navigate(['admin']);
              this.signInService.signInStatusSubject.next(true)

            } else if (this.signInService.getUserRole() == "NORMAL") {
              this.router.navigate(['user']);
              this.signInService.signInStatusSubject.next(true)
            } else {
              this.signInService.signOut();
            }

          }, (error) => {
            console.log(error);

          })

      }, (error) => {
        console.log(error);
        
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Invalid Details !! Try Again',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}

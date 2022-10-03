import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../../all-services/singIn/sign-in.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  constructor(private signInService:SignInService, private router:Router) { }

  ngOnInit(): void {
  }

  signOut(){
    this.signInService.signOut();
    this.signInService.signInStatusSubject.next(false);
    this.router.navigate([''])
  }
}

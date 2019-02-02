import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false
  isUser: boolean = false
  isAdmin: boolean = false

  constructor(private as: AuthService, private us: UserService) { }

  ngOnInit() {
    this.as.user.subscribe(user => {
      if (user) {
        this.isUser = true
        this.as.userId = user.uid
        this.us.getUserData().subscribe(data => {
          if (data['admin']) this.isAdmin = true;
        })
      }
      else {
        this.isUser = false
        this.as.userId = ''
      }
    })
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen
  }

  logout() {
    this.as.logout()
  }

}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService) { }
  
  ngOnInit() {}

  signIn(): void {
    try {

    } catch {
      
    }
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["dashboard"]);
    } else {
      alert("Invalid credentials");
    }
  }
}

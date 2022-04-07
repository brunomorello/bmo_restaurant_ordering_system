import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(`user: ${this.username} - password: ${this.password}`);
    this.authService.authenticate(this.username, this.password)
      .subscribe(() => {
        console.log('success');
        this.router.navigate(['orders']);
      }, (err) => {
        alert('error to login');
        console.error(err);
      });
  }

}

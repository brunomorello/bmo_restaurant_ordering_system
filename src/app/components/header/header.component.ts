import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserToken } from 'src/app/authentication/models/user-token/user-token';
import { UserService } from 'src/app/authentication/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userToken: Observable<UserToken> | undefined;
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.userToken = this.userService.returnUser();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }

}

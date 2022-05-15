import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserToken } from 'src/app/authentication/models/user-token/user-token';
import { UserService } from 'src/app/authentication/services/user/user.service';

@Component({
  selector: 'app-header-nav-sidebar',
  templateUrl: './header-nav-sidebar.component.html',
  styleUrls: ['./header-nav-sidebar.component.css']
})
export class HeaderNavSidebarComponent implements OnInit {

  userToken?: Observable<UserToken>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userToken = this.userService.returnUser();
  }

}

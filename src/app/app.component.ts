import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmo_restaurant_oder_system';

  @ViewChild(MatSidenav)
  matSidenav!: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.breakpointObserver.observe(['']).subscribe(res => console.log(res));
  }
}

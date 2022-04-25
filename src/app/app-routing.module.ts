import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { LoginGuard } from './authentication/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  // lazy loading
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard] },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
    canLoad: [AuthenticationGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

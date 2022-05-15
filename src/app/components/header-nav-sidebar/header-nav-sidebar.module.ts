import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavSidebarComponent } from './header-nav-sidebar.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HeaderNavSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HeaderNavSidebarComponent
  ]
})
export class HeaderNavSidebarModule { }

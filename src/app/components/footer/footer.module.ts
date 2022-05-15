import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModuleModule
  ],
  exports: [
    RouterModule,
    FooterComponent
  ]
})
export class FooterModule { }

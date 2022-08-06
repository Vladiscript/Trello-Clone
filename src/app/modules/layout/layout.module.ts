import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class LayoutModule { }

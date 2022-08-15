import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModalComponent } from './header-modal.component';
import { HeaderModalService } from './header-modal.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ClickOutsideDirective } from '../../directives/click-outside.directive';


@NgModule({
  declarations: [HeaderModalComponent, ClickOutsideDirective],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ClickOutsideDirective
  ],
  providers: [HeaderModalService]
})
export class HeaderModalModule {
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderModalComponent } from './header-modal.component';

@Injectable()
export class HeaderModalService {

  constructor(private dialog: MatDialog) {
  }

  openModal(leftValue: string): void {
    this.dialog.open(HeaderModalComponent,
      {
        panelClass: 'header-modal__container',
        hasBackdrop: false,
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '0ms',
        position: {
          left: leftValue + 'px'
        }
      });
  }
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBoardModalComponent } from '../create-board-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CreateBoardModalService {

  constructor(private dialog: MatDialog) {
  }

  openModal(leftValue: number): void {
    this.dialog.open(CreateBoardModalComponent,
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

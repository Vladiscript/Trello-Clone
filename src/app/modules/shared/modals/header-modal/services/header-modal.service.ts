import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderModalComponent } from '../header-modal.component';
import { BehaviorSubject } from 'rxjs';
import { ModalIdType } from '../models/modal-id';

@Injectable()
export class HeaderModalService {

  modalIdSubject$ = new BehaviorSubject<ModalIdType>('workspaces');

  modalId$ = this.modalIdSubject$.asObservable();

  constructor(private dialog: MatDialog) {
  }

  openModal(leftValue: string, modalId: ModalIdType): void {
    this.modalIdSubject$.next(modalId);
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

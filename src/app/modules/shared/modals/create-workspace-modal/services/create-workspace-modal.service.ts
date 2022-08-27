import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateWorkspaceModalComponent } from '../create-workspace-modal.component';

@Injectable({
  providedIn: 'root'
})
export class CreateWorkspaceModalService {

  constructor(private dialog: MatDialog) {
  }

  openModal(): void {
    this.dialog.open(CreateWorkspaceModalComponent,
      {
        panelClass: 'create-workspace-modal__container',
        enterAnimationDuration: '0ms',
        exitAnimationDuration: '0ms',
      });
  }
}

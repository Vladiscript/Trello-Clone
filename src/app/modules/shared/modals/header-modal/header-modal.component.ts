import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderModalService } from './services/header-modal.service';
import { CreateBoardModalService } from '../create-board-modal/services/create-board-modal.service';
import { CreateWorkspaceModalService } from '../create-workspace-modal/services/create-workspace-modal.service';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent implements OnInit {

  modalId$ = this.headerModalService.modalId$;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private headerModalService: HeaderModalService,
    private createBoardModalService: CreateBoardModalService,
    private createWorkspaceModalService: CreateWorkspaceModalService,
    private dialogRef: MatDialogRef<HeaderModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }

  openCreateBoardModal(element: any): void {
    this.dialogRef.close();
    const leftValue = element.currentTarget.offsetLeft + element.currentTarget.offsetWidth;
    this.createBoardModalService.openModal(leftValue);
  }

  openCreateWorkspaceModal() {
    this.dialogRef.close();
    this.createWorkspaceModalService.openModal();
  }
}

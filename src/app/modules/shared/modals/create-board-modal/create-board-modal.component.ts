import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateBoardModalService } from './services/create-board-modal.service';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-board-modal',
  templateUrl: './create-board-modal.component.html',
  styleUrls: ['./create-board-modal.component.scss']
})
export class CreateBoardModalComponent implements OnInit {

  backgrounds = [
    'url("https://images.unsplash.com/photo-1660712285712-395bea5069c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjYxMDc3OTQ0&ixlib=rb-1.2.1&q=80&w=400")',
    'url("https://images.unsplash.com/photo-1660677727116-b163bed4b37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDEzfDMxNzA5OXx8fHx8Mnx8MTY2MTA3Nzk0NA&ixlib=rb-1.2.1&q=80&w=400")',
    'url("https://images.unsplash.com/photo-1660723610342-9f109f22b63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDl8MzE3MDk5fHx8fHwyfHwxNjYxMDc3OTQ0&ixlib=rb-1.2.1&q=80&w=400")',
    'url("https://images.unsplash.com/photo-1660712285712-395bea5069c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjYxMDc3OTQ0&ixlib=rb-1.2.1&q=80&w=400")'
  ];

  colors = [
    'rgb(0, 121, 191)',
    'rgb(210, 144, 52)',
    'rgb(81, 152, 57)',
    'rgb(176, 70, 50)',
    'rgb(137, 96, 158)',
    'rgb(131, 140, 145)'
  ];

  chosenBackground = this.backgrounds[0];
  workspaces = ['IT', 'Marketing', 'Inventorsoft'];

  formGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    workspace: new FormControl('')
  });

  get title() {
    return this.formGroup.get('title');
  }

  get workspace() {
    return this.formGroup.get('workspace');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    @Inject(DOCUMENT) private document: Document,
    private createBoardModalService: CreateBoardModalService,
    private dialogRef: MatDialogRef<CreateBoardModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  chooseBackground(element: any, background: string): void {
    this.document.querySelectorAll('.chosen').forEach(e => e.classList.remove('chosen'));
    element.currentTarget.classList.add('chosen');
    this.chosenBackground = background;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  selectWorkspace(value: string): void {
      this.workspace?.setValue(value)
    console.log(value);
  }
}

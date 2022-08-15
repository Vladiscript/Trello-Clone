import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderModalService } from './header-modal.service';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
  styleUrls: ['./header-modal.component.scss']
})
export class HeaderModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private headerModalService: HeaderModalService,
    private dialogRef: MatDialogRef<HeaderModalComponent>
  ) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close()
  }

}

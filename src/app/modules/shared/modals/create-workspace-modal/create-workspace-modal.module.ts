import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateWorkspaceModalComponent } from './create-workspace-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateWorkspaceModalService } from './services/create-workspace-modal.service';
import { CreateBoardModalModule } from '../create-board-modal/create-board-modal.module';


@NgModule({
  declarations: [CreateWorkspaceModalComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    CreateBoardModalModule
  ],
  providers: [CreateWorkspaceModalService]
})
export class CreateWorkspaceModalModule {
}

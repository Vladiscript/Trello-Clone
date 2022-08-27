import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBoardModalComponent } from './create-board-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateBoardModalService } from './services/create-board-modal.service';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderModalModule } from '../header-modal/header-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../components/select/select.component';


@NgModule({
  declarations: [
    CreateBoardModalComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    HeaderModalModule,
    ReactiveFormsModule
  ],
  exports: [
    SelectComponent
  ],
  providers: [CreateBoardModalService]
})
export class CreateBoardModalModule {
}

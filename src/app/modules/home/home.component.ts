import { Component, OnInit } from '@angular/core';
import { CreateBoardModalService } from '../shared/modals/create-board-modal/services/create-board-modal.service';
import {
  CreateWorkspaceModalService
} from '../shared/modals/create-workspace-modal/services/create-workspace-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isWorkspaces: boolean = false;
  starredWorkspaces = [];

  constructor(
    private createBoardModalService: CreateBoardModalService,
    private createWorkspaceModalService: CreateWorkspaceModalService
  ) {
  }

  ngOnInit(): void {
  }

  openModal(element: any): void {
    const leftValue = element.currentTarget.offsetLeft + element.currentTarget.offsetWidth;
    this.createBoardModalService.openModal(leftValue);
  }

  openCreateWorkspace() {
    this.createWorkspaceModalService.openModal();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-workspace-modal',
  templateUrl: './create-workspace-modal.component.html',
  styleUrls: ['./create-workspace-modal.component.scss']
})
export class CreateWorkspaceModalComponent implements OnInit {
  workspaceTypes = ['Education', 'Engineering IT', 'Education', 'Small Business', 'Operations','Sales CRM', 'Marketing', 'Human Resources', 'Others'];
  selectedType = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  selectWorkspace(event: string) {
    console.log(event);
  }
}

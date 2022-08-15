import { Component, OnInit } from '@angular/core';
import { HeaderModalService } from '../shared/modals/header-modal/header-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isWorkspaces: boolean = true;

  constructor(private headerModalService: HeaderModalService) { }

  ngOnInit(): void {
  }

  openModal(element: any): void {
    this.headerModalService.openModal(element.currentTarget.offsetLeft);
  }

}

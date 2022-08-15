import { Component, OnInit } from '@angular/core';
import { HeaderModalService } from '../../../shared/modals/header-modal/header-modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerModalService: HeaderModalService) {
  }

  ngOnInit(): void {
  }

  openModal(element: any): void {
      this.headerModalService.openModal(element.currentTarget.offsetLeft);
  }

}

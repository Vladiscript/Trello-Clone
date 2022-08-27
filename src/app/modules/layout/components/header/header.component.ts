import { Component, OnInit } from '@angular/core';
import { HeaderModalService } from '../../../shared/modals/header-modal/services/header-modal.service';
import { ModalIdType } from '../../../shared/modals/header-modal/models/modal-id';

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

  openModal(element: any, modalId: ModalIdType): void {
    this.headerModalService.openModal(element.currentTarget.offsetLeft, modalId);
  }

}

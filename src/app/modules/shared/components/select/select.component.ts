import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: string[] = [];
  @Output() onSelect = new EventEmitter<string>()

  selectedOption = '';
  isOpenedSelect = false;

  constructor() {
  }

  ngOnInit(): void {
    this.selectedOption = this.options[1];
  }

  toggleSelect(): void {
    this.isOpenedSelect = !this.isOpenedSelect;
  }

  close(): void {
    this.isOpenedSelect = false;
  }

  selectOption(e:MouseEvent,value: string): void {
    e.stopPropagation();
    this.onSelect.emit(value)
    this.selectedOption = value;
    this.isOpenedSelect = false;
  }


}

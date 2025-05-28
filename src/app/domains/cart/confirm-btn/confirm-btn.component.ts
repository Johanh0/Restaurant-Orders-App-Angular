import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Global State
import { cartList, modalStatus } from '../../shared/global/globalStates';

@Component({
  selector: 'app-confirm-btn',
  imports: [CommonModule],
  templateUrl: './confirm-btn.component.html',
})
export class ConfirmBtnComponent {
  dishesLength = cartList;
  modal = modalStatus;

  openModal() {
    this.modal.set(true);
  }
}

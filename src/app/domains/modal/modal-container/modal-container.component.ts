import { Component } from '@angular/core';

// Global State
import {
  cartList,
  cartTotal,
  modalStatus,
} from '../../shared/global/globalStates';

@Component({
  selector: 'app-modal-container',
  imports: [],
  templateUrl: './modal-container.component.html',
})
export class ModalContainerComponent {
  listItems = cartList;
  modal = modalStatus;
  total = cartTotal;

  closeModal() {
    this.modal.set(false);
    this.total.set(0);

    const updateDishes = this.listItems().map((dish) => {
      dish.amount = 0;
      return dish;
    });

    this.listItems.set(updateDishes);
    this.listItems.set([]);
  }
}

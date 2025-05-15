import { Component, Input, signal } from '@angular/core';

// Global State
import { cartList } from '../../shared/global/globalStates';

// Models
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-order-btn',
  imports: [],
  templateUrl: './order-btn.component.html',
})
export class OrderBtnComponent {
  @Input({ required: true }) dishDetails!: Dish;

  cart = cartList;
  dishAmount = signal(this.dishDetails?.amount);

  addDishFromCart() {
    const findDish = this.cart().find(
      (dish) => dish.id === this.dishDetails?.id
    );

    if (findDish) {
      findDish.amount = findDish.amount + 1;
    } else {
      this.dishDetails.amount = +1;
      const addNewDish: Dish[] = this.dishDetails
        ? [...this.cart(), this.dishDetails]
        : [];

      this.cart.set(addNewDish);
    }
  }

  removeDishFromCart() {
    const findDish = this.cart().find(
      (dish) => dish.id === this.dishDetails?.id
    );

    if (findDish) {
      findDish.amount = findDish.amount - 1;
      console.log(this.cart());
    } else {
      this.dishDetails.amount = -1;
      const addNewDish: Dish[] = this.dishDetails
        ? [...this.cart(), this.dishDetails]
        : [];

      this.cart.set(addNewDish);
    }
  }
}

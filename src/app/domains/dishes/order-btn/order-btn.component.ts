import { Component, Input } from '@angular/core';

// Global State
import { cartList, cartTotal } from '../../shared/global/globalStates';

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
  total = cartTotal;

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

      // const addTotal = this.dishDetails.price + this.total();
      const addTotal = this.cart().map((dish) => dish.amount);
      this.cart.set(addNewDish);
      // this.total.set(addTotal);
    }

    const addTotal = this.cart().map((dish) => {
      const price = dish.price;
      const amount = dish.amount;

      const total = price * amount;
      return total;
    });

    const finalTotal = addTotal.reduce((a, b) => a + b);
    this.total.set(finalTotal);
  }

  removeDishFromCart() {
    const findDish = this.cart().find(
      (dish) => dish.id === this.dishDetails?.id
    );

    if (findDish) {
      findDish.amount = findDish.amount - 1;
      this.total.set(this.total() - findDish?.price);
    }

    if (findDish?.amount === 0) {
      const removeDish = this.cart().filter(
        (dish) => dish.id !== this.dishDetails.id
      );
      this.cart.set(removeDish);
    }
  }
}

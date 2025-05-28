import { Component, Input, SimpleChanges } from '@angular/core';

// Global State
import { cartList, cartTotal } from '../../shared/global/globalStates';

// Models
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input({ required: true }) listDetails!: Dish;

  dishesList = cartList;

  deleteDishFromList(id: `${string}-${string}-${string}-${string}-${string}`) {
    const dish = this.dishesList().filter((dish) => dish.id === id)[0];
    cartTotal.set(cartTotal() - dish.amount * dish.price);
    dish.amount = 0;
    const removeDish = this.dishesList().filter((dish) => dish.id !== id);

    this.dishesList.set(removeDish);
  }
}

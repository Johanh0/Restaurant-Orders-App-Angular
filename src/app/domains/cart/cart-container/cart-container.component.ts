import { Component, effect, signal } from '@angular/core';

// Components
import { CartListComponent } from '../cart-list/cart-list.component';

// Global State
import { cartList, cartTotal } from '../../shared/global/globalStates';

@Component({
  selector: 'app-cart-container',
  imports: [CartListComponent],
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent {
  cartFinalList = cartList;
  total = cartTotal;
}

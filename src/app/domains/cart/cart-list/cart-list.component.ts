import { Component, Input } from '@angular/core';

// Models
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-cart-list',
  imports: [],
  templateUrl: './cart-list.component.html',
})
export class CartListComponent {
  @Input({ required: true }) listDetails!: Dish;
}

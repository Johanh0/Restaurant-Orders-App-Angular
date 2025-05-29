import { Component, Input } from '@angular/core';

// Components
import { OrderBtnComponent } from '../order-btn/order-btn.component';

// Model
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-card',
  imports: [OrderBtnComponent],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) cardData!: Dish;
}

import { Component, Input } from '@angular/core';

// Model
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input({ required: true }) cardData!: Dish;
}

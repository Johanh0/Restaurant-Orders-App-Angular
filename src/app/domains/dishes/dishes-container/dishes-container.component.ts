import { Component, computed } from '@angular/core';

// Components
import { CardComponent } from '../card/card.component';

// Models
import { Dish } from '../../shared/models/dish.model';

// Data
import { dishes } from '../../shared/data/data';

// Global State
import {
  currentCategoryState,
  currentDishesState,
} from '../../shared/global/globalStates';

@Component({
  selector: 'app-dishes-container',
  imports: [CardComponent],
  templateUrl: './dishes-container.component.html',
})
export class DishesContainerComponent {
  dishesFiltered = computed(currentDishesState);
}

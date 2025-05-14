import { Component, signal } from '@angular/core';

// Components
import { FilterTitleComponent } from '../filter-title/filter-title.component';
import { FilterComponent } from '../filter/filter.component';

// Global State
import {
  currentDishesState,
  currentCategoryState,
} from '../../shared/global/globalStates';

// Models
import { DishCategories } from '../../shared/models/dish.model';

// Data
import { dishes } from '../../shared/data/data';

@Component({
  selector: 'app-filter-container',
  imports: [FilterTitleComponent, FilterComponent],
  templateUrl: './filter-container.component.html',
})
export class FilterContainerComponent {
  currentCategory = currentCategoryState;
  currentDishes = currentDishesState;

  ngOnInit() {
    const dishesFiltered = dishes.filter((dish) => dish.category === 'dinner');
    this.currentDishes.set(dishesFiltered);
  }

  handleCategoryEmitter(category: string) {
    this.currentCategory.set(category as DishCategories);
    const dishesFiltered = dishes.filter((dish) => dish.category === category);

    this.currentDishes.set(dishesFiltered);
  }
}

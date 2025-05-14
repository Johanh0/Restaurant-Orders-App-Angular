import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Models
import { DishCategories } from '../../shared/models/dish.model';

// Data
import { dishesCategories } from '../../shared/data/data';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  categories = dishesCategories;

  @Input({ required: true }) currentCategory!: string;
  @Output() categoryEmitter = new EventEmitter<string>();

  sendCurrentCategory(category: DishCategories) {
    this.categoryEmitter.emit(category);
  }
}

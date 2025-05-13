import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  dishesCategories = ['appetizer', 'dinner', 'salads', 'dessers', 'drinks'];

  @Input({ required: true }) currentCategory!: string;
  @Output() categoryEmitter = new EventEmitter<string>();

  sendCurrentCategory(category: string) {
    this.categoryEmitter.emit(category);
  }
}

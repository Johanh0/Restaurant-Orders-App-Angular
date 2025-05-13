import { Component, signal } from '@angular/core';

// Components
import { FilterTitleComponent } from '../filter-title/filter-title.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-filter-container',
  imports: [FilterTitleComponent, FilterComponent],
  templateUrl: './filter-container.component.html',
})
export class FilterContainerComponent {
  currentCategory = signal<string>('dinner');

  handleCategoryEmitter(category: string) {
    this.currentCategory.set(category);
  }
}

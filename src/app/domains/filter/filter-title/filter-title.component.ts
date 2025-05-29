import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-title',
  imports: [],
  templateUrl: './filter-title.component.html',
})
export class FilterTitleComponent {
  @Input({ required: true }) categoryTitle!: string;
}

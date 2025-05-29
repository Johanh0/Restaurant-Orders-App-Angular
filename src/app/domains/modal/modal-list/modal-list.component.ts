import { Component, Input } from '@angular/core';

// Models
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-modal-list',
  imports: [],
  templateUrl: './modal-list.component.html',
})
export class ModalListComponent {
  @Input({ required: true }) listDetails!: Dish;
}

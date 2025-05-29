import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';

// Components
import { FilterContainerComponent } from './domains/filter/filter-container/filter-container.component';
import { DishesContainerComponent } from './domains/dishes/dishes-container/dishes-container.component';
import { CartContainerComponent } from './domains/cart/cart-container/cart-container.component';
import { ModalContainerComponent } from './domains/modal/modal-container/modal-container.component';

// Global State
import { modalStatus } from './domains/shared/global/globalStates';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FilterContainerComponent,
    DishesContainerComponent,
    CartContainerComponent,
    ModalContainerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Restaurant-Orders-App-Angular';

  modal = modalStatus;
}

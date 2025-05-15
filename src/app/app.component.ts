import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// Components
import { FilterContainerComponent } from './domains/filter/filter-container/filter-container.component';
import { DishesContainerComponent } from './domains/dishes/dishes-container/dishes-container.component';
import { CartContainerComponent } from './domains/cart/cart-container/cart-container.component';

@Component({
  selector: 'app-root',
  imports: [
    FilterContainerComponent,
    DishesContainerComponent,
    CartContainerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Restaurant-Orders-App-Angular';
}

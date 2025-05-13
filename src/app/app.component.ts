import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// Components
import { FilterContainerComponent } from './domains/filter/filter-container/filter-container.component';

@Component({
  selector: 'app-root',
  imports: [FilterContainerComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Restaurant-Orders-App-Angular';
}

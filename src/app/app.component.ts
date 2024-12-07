import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PpalComponent } from './ppal/ppal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PpalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'labravapage';

}

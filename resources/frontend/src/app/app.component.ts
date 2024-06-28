import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicialComponent],
  templateUrl: './app.component.html',
  styleUrl: './output.css'
  
})
export class AppComponent {
  title = 'frontend';
}

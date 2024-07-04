import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component'
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, InicialComponent, NavbarComponent, CadastroEmpresasComponent],
  templateUrl: './app.component.html',
  styleUrl: './output.css'
  
})
export class AppComponent {
  
  title = 'frontend';
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component'
import { NavbarComponent } from './navbar/navbar.component';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CadastroTributoComponent } from './cadastro-tributo/cadastro-tributo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    InicialComponent, 
    NavbarComponent, 
    CadastroEmpresasComponent,
    MeusProdutosComponent,
    CadastroProdutosComponent,
    CadastroTributoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './output.css'
  
})
export class AppComponent {
  
  title = 'frontend';
}

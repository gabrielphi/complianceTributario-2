import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute } from '@angular/router';
import { CadastroProdutosComponent } from '../cadastro-produtos/cadastro-produtos.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { CadastroTributoComponent } from '../cadastro-tributo/cadastro-tributo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-meus-produtos',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    CadastroProdutosComponent, 
    NavbarComponent, 
    CadastroTributoComponent,
    MatCardModule, 
    MatButtonModule],
  templateUrl: './meus-produtos.component.html',

  styleUrl: './meus-produtos.component.scss'
})
export class MeusProdutosComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient

  ) {}

  user_id: any = this.route.snapshot.paramMap.get('id');
  
  userList: any [] = [];
  tributeList: any [] = [];

  ngOnInit(){
    this.getAllProdutos();  
  }
  getAllProdutos(){
    this.http.get("http://127.0.0.1:8000/api/produtos/" + this.user_id).subscribe((result:any)=>{
      this.userList = result;
    })
  }

  getTributoProduct(id: any){
    alert(id);
    this.http.get("http://127.0.0.1:8000/api/tributo/" + id).subscribe((result:any)=>{
      this.tributeList = result;
    })
  }
}




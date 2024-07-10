import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.scss'
})
export class CadastroProdutosComponent {

    cadastroPrd:any = {
      "nome_produto": "",
      "codigo_de_barras": "",
      "ncm_produto": ""
    }
    http = inject(HttpClient);
    onSave(){
      
        this.http.post("http://34.67.250.26:8000/api/produtos", this.cadastroPrd).subscribe((res:any)=>{
          if(res = ['OK']) {
            alert("Produto criado com sucesso")
          } else{
            alert(res.message)
          }
        })
    }
}

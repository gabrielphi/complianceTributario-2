import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-tributo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-tributo.component.html',
  styleUrl: './cadastro-tributo.component.scss'
})
export class CadastroTributoComponent {

  cadastroTrib:any = {
    "icms_aliquota": "",
    "icms_cst": "",
    "pis_aliquota": "",
    "pis_cst": "",
    "cofins_aliquota": "",
    "cofins_cst": "",
    "tipo_tributacao":"",
    "id_produto_fk": ""
  }
  http = inject(HttpClient);
  onSave(){
    
      this.http.post("http://127.0.0.1:8000/api/tributo", this.cadastroTrib).subscribe((res:any)=>{
        if(res = ['OK']) {
          alert("Produto criado com sucesso")
        } else{
          alert(res.message)
        }
      })
  }
}


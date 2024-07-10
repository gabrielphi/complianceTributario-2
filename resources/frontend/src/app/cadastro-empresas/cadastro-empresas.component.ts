import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-empresas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro-empresas.component.html',
  styleUrl: './cadastro-empresas.component.scss'
})
export class CadastroEmpresasComponent {
    cadastroEmp:any = {
      "name": "",
      "cnpj": "",
      "inscricaoEstadual": "",
      "tag": ""
    }
    http = inject(HttpClient);
    onSave(){
      
        this.http.post("http://34.67.250.26:8000/api/empresas", this.cadastroEmp).subscribe((res:any)=>{
          if(res = ['OK']) {
            alert("Empresa criada com sucesso")
          } else{
            alert(res.message)
          }
        })
    }
}

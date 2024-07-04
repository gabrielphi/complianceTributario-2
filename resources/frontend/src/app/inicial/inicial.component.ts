import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CadastroEmpresasComponent } from '../cadastro-empresas/cadastro-empresas.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [RouterOutlet, RouterLink,InicialComponent, NavbarComponent, CadastroEmpresasComponent],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent implements OnInit {
    
    userList: any [] = [];


    constructor(private http: HttpClient){

    }
    ngOnInit(){
      this.getAllEmpresas();  
    }
    getAllEmpresas(){
      this.http.get("http://127.0.0.1:8000/api/empresas").subscribe((result:any)=>{
        this.userList = result;
      })
    }

    deleteEmpresa(id: number){
      this.http.delete("http://127.0.0.1:8000/api/empresas/" + id).subscribe((result:any)=>{
        if(result = ['OK']){
          alert("Empresa apagada com sucesso");
          this.getAllEmpresas();
        }else{
          alert(result.message);
        }
      })
    }
    

}


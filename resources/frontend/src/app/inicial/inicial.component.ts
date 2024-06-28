import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-inicial',
  standalone: true,
  imports: [],
  templateUrl: './inicial.component.html',
  styleUrl: './inicial.component.scss'
})
export class InicialComponent {
    
    userList: any [] = [];


    constructor(private http: HttpClient){

    }

    getAllEmpresas(){
      this.http.get("http://127.0.0.1:8000/api/empresas").subscribe((result:any)=>{
        this.userList = result;
      })
    }

    deleteEmpresa(id: number){
      this.http.delete("http://127.0.0.1:8000/api/empresas/" + id).subscribe((result:any)=>{
        if(result.result){
          alert("Empresa apagada com sucesso");
          this.getAllEmpresas();
        }else{
          alert(result.message);
        }
      })
    }
}


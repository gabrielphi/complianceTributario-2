import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-view-empresa',
  standalone: true,
  imports: [],
  templateUrl: './view-empresa.component.html',
  styleUrl: './view-empresa.component.scss'
})
export class ViewEmpresaComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient

  ) {}

  user_id: any = this.route.snapshot.paramMap.get('id');
  
  userList: any [] = [];

  ngOnInit(){
    this.getAllProdutos();  
  }
  getAllProdutos(){
    this.http.get("http://34.67.250.26:8000/api/produtos/" + this.user_id).subscribe((result:any)=>{
      this.userList = result;
    })
  }
}


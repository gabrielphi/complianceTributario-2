import { Routes } from '@angular/router';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { InicialComponent } from './inicial/inicial.component';
import { ViewEmpresaComponent } from './view-empresa/view-empresa.component';

export const routes: Routes = [
    {
       path:'cadastroEmpresas' ,
       component: CadastroEmpresasComponent,
       pathMatch: 'full'
    },
    {
        path:'home' ,
        component: InicialComponent,
        pathMatch: 'full'
     },
     {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
     },
     {
        path:'viewProdutos/:id',
        component: ViewEmpresaComponent
     }

];

import { Routes } from '@angular/router';
import { CadastroEmpresasComponent } from './cadastro-empresas/cadastro-empresas.component';
import { InicialComponent } from './inicial/inicial.component';
import { ViewEmpresaComponent } from './view-empresa/view-empresa.component';
import { MeusProdutosComponent } from './meus-produtos/meus-produtos.component';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { CadastroTributoComponent } from './cadastro-tributo/cadastro-tributo.component';

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
     },
     {
      path:'meusProdutos',
      pathMatch: 'full',
      component: MeusProdutosComponent
   },
   {
      path:'cadastrarProduto',
      pathMatch: 'full',
      component: CadastroProdutosComponent
   },
   {
      path:'cadastrarTributo',
      pathMatch: 'full',
      component: CadastroTributoComponent
   }
   
];

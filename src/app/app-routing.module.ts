import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'confirma', loadChildren: './confirma/confirma.module#ConfirmaPageModule' },
  { path: 'solicitacao', loadChildren: './solicitacao/solicitacao.module#SolicitacaoPageModule' },
  {path: 'lista', component: ListaComponent},
  { path: 'salvar-usuario', loadChildren: './usuario/salvar-usuario/salvar-usuario.module#SalvarUsuarioPageModule' },
 { path: 'usuario-listar', loadChildren: './usuario/usuario-listar/usuario-listar.module#UsuarioListarPageModule' },

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

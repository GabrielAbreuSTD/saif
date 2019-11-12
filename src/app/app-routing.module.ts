import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnviarPage } from './enviar/enviar.page';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'enviar', component: EnviarPage },  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'salvar-usuario', loadChildren: './usuario/salvar-usuario/salvar-usuario.module#SalvarUsuarioPageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'confirma', loadChildren: './confirma/confirma.module#ConfirmaPageModule' },
  { path: 'solicitacao', loadChildren: './solicitacao/solicitacao.module#SolicitacaoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

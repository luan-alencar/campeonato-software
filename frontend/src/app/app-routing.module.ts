import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiarioErrosComponent } from './components/diario-erros/diario-erros.component';
import { LoginSuccessComponent } from '@nuvem/angular-base';
import { CategoriaModule } from './modules/categoria/categoria.module';

const routes: Routes = [
    { path: 'diario-erros', component: DiarioErrosComponent, data: { breadcrumb: 'Diário de Erros'} },
    { path: 'categorias', loadChildren: ()=> CategoriaModule },
    { path: 'login-success', component: LoginSuccessComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

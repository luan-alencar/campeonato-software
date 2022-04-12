import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarCategoriaComponent } from './components/consultar-categoria/consultar-categoria.component';


const routes: Routes = [
  {
    path: '',
    component: ConsultarCategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaModule } from './categoria.module';
import { ListCategoriasComponent } from './components/list-categorias/list-categorias.component';


const routes: Routes = [
  {
    path: '',
    component: ListCategoriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

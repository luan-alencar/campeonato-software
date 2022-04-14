import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarCategoriaComponent } from './components/consultar-categoria/consultar-categoria.component';
import { FormCategoriaComponent } from './components/form-categoria/form-categoria.component';


const routes: Routes = [

  { path: '', component: ConsultarCategoriaComponent },
  { path: 'salvar', component: FormCategoriaComponent },
  { path: 'salvar/:id', component: FormCategoriaComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

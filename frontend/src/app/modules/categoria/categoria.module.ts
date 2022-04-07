import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListCategoriasComponent } from './components/list-categorias/list-categorias.component';
import { CategoriaService } from './service/categoria.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListCategoriasComponent],
  providers: [CategoriaService],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaService } from './service/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarCategoriaComponent } from './components/consultar-categoria/consultar-categoria.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ConsultarCategoriaComponent],
  providers: [CategoriaService],
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule { }

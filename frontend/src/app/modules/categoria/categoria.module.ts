import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaService } from './service/categoria.service';
import { ConsultarCategoriaComponent } from './components/consultar-categoria/consultar-categoria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormCategoriaComponent } from './components/form-categoria/form-categoria.component';
import { ConfirmationService } from 'primeng';


@NgModule({
  declarations: [ConsultarCategoriaComponent, FormCategoriaComponent],
  providers: [CategoriaService, ConfirmationService],
  imports: [
    CommonModule,
    SharedModule,
    CategoriaRoutingModule
    
  ]
})
export class CategoriaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletasRoutingModule } from './atletas-routing.module';
import { ConsultarAtletaComponent } from './consultar-atleta/consultar-atleta.component';
import { FormAtletasComponent } from './form-atletas/form-atletas.component';
import { ConsultarAtletasComponent } from './consultar-atletas/consultar-atletas.component';


@NgModule({
  declarations: [ConsultarAtletaComponent, FormAtletasComponent, ConsultarAtletasComponent],
  imports: [
    CommonModule,
    AtletasRoutingModule
  ]
})
export class AtletasModule { }

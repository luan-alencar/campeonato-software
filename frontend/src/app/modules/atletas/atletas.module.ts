import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtletasRoutingModule } from './atletas-routing.module';
import { ConsultarAtletasComponent } from './components/consultar-atletas/consultar-atletas.component';
import { FormAtletasComponent } from './components/form-atletas/form-atletas.component';


@NgModule({
  declarations: [ConsultarAtletasComponent, FormAtletasComponent, ConsultarAtletasComponent],
  imports: [
    CommonModule,
    AtletasRoutingModule
  ]
})
export class AtletasModule { }

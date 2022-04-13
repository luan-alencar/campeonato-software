import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@nuvem/angular-base';
import { CaptchaModule } from 'primeng';
import { PRIMENG_IMPORTS } from '../primeng-imports';
import { TabelaPadraoComponent } from './tabela-padrao/tabela-padrao.component';
import { TabelaDinamicaComponent } from './tabela-dinamica/tabela-dinamica.component';



@NgModule({
  declarations: [
    TabelaPadraoComponent,
    CardComponent,
    TabelaDinamicaComponent,
  ],
  imports: [
    CommonModule,
    PRIMENG_IMPORTS,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    CaptchaModule
  ],
  exports: [
    TabelaPadraoComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DinamicoPipe } from './dinamico.pipe';
import { LimitStringPipe } from './limit-string.pipe';
import { RemoveTagsPipe } from './remove-tags.pipe';
import { TelefonePipe } from './telefone.pipe';
import { CPFPipe } from './cpf.pipe';
import { DecimalPipe } from './decimal.pipe';



@NgModule({
  declarations: [
    RemoveTagsPipe,
    LimitStringPipe,
    CPFPipe,
    TelefonePipe,
    DecimalPipe,
    DinamicoPipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    RemoveTagsPipe,
    LimitStringPipe,
    DatePipe,
    DinamicoPipe,
    CPFPipe,
    DecimalPipe,
  ],
  exports: [
    RemoveTagsPipe,
    LimitStringPipe,
    CPFPipe,
    TelefonePipe,
    DinamicoPipe,
    DecimalPipe
  ]
})
export class PipesModule { }

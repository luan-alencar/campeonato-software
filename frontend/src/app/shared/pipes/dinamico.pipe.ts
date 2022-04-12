import { Injector, Pipe, PipeTransform } from '@angular/core';
import { PipeDinamico } from '../models/pipe-dinamico';

@Pipe({
  name: 'dinamico'
})
export class DinamicoPipe implements PipeTransform {

  constructor(private injector: Injector) {}

  transform(valor: any, pipeDinamico: PipeDinamico[]): any {
    if (!pipeDinamico){
      return valor;
    } 
      
    return this.transformarValor(valor, pipeDinamico.slice().reverse());
  }

  private transformarValor(valor: any, pipeDinamico: PipeDinamico[]): any {
    if (PipeDinamico.length === 0) {
      return valor;
    }

    const valorPipe = pipeDinamico.pop();
    const pipeService = this.injector.get<any>(valorPipe.token);
    const novoValor = pipeService.transform(valor, ...valorPipe.argumentos);

    return this.transformarValor(novoValor, pipeDinamico);
  }

}

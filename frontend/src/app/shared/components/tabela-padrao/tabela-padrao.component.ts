import { Component, Input, OnInit, Output, ViewChild, EventEmitter, Injector } from '@angular/core';
import { Table } from 'primeng';
import { ColunaTabelaDinamica } from '../../models/coluna-tabela-dinamica';
import { EventoAtualizarTabelaDinamica } from '../../models/evento-atualizar-tabela-dinamica';
import { Page } from '../../models/page';
import { PipeDinamico } from '../../models/pipe-dinamico';

@Component({
  selector: 'app-tabela-padrao',
  templateUrl: './tabela-padrao.component.html',
  styleUrls: ['./tabela-padrao.component.css']
})
export class TabelaPadraoComponent {

  @ViewChild('tabela') tabela: Table;
  @Input() resultado: Page<any> = new Page();

  @Input() colunas: ColunaTabelaDinamica[] = [];
  @Input() exibirBotaoEditar = true; 
  @Input() exibirBotaoExcluir = true;
  
  @Output() carregarItens = new EventEmitter<EventoAtualizarTabelaDinamica>();
  @Output() cliqueVizualizar = new EventEmitter();
  @Output() cliqueEditar = new EventEmitter();
  @Output() cliqueRemover = new EventEmitter<number>();
  @Output() exportar = new EventEmitter<string>();

  @Input() situacaoIconeCustomizados = false;
  @Input() exibirBotaoHistorico = false;
  @Input() toolTipInativar: string;
  @Input() toolTipAlterar: string;
  @Input() toolTipVisualizar: string;
  @Input() toolTipExcluir: string;


  @Output() cliqueVisualizar = new EventEmitter();
  @Output() cliqueVisualizarHistorico = new EventEmitter();


  nenhumRegistroCadastrado = 'Nenhum registro cadastrado';

  constructor(private injector: Injector) {}

  carregarTabela(filtro ?: any) {
    this.carregarItens.emit({
      dadosTabela: this.tabela ? this.tabela: null,
      filtroColuna: filtro ? filtro: null
    });
  }

  quantidadeColunas(): number {
    return this.colunas.length + 2;
  }

  verificaColunaData(param: any): boolean {
    return param.match(/data/);
  }
}

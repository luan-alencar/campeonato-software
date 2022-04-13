import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Table } from 'primeng';
import { EventoAtualizarTabelaDinamica } from '../../models/evento-atualizar-tabela-dinamica';
import { Page } from '../../models/page';

@Component({
  selector: 'app-tabela-dinamica',
  templateUrl: './tabela-dinamica.component.html',
  styleUrls: ['./tabela-dinamica.component.css']
})
export class TabelaDinamicaComponent implements OnInit {

  @ViewChild('tabela') tabela: Table;
  
  @Output() carregarItens = new EventEmitter<EventoAtualizarTabelaDinamica>();

  @Input() exibirBotaoEditar = true;
  @Input() exibirBotaoExcluir = true;
  @Input() resultado: Page<any> = new Page();
  filtroColuna = new Object();

  constructor() { }

  ngOnInit(): void {
  }

  carregarTabela() {
    this.carregarItens.emit({
      dadosTabela: this.tabela ? this.tabela : null,
      filtroColuna: this.filtroColuna
    });
  }

}

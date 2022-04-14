import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input('titulo-pagina') tituloPagina: string;
  @Input('mostrar-botao') mostrarBotao: boolean = true;
  @Input('classe-botao') classeBotao: string;
  @Input('texto-botao') textoBotao: string;
  @Input('link-botao') linkBotao: string;

  constructor() { }

  ngOnInit(): void {
  }

}

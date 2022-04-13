import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-consultar-categoria',
  templateUrl: './consultar-categoria.component.html',
  styleUrls: ['./consultar-categoria.component.css']
})
export class ConsultarCategoriaComponent implements OnInit {

  @Input() categoria: string = 'Categorias';
  
  @Output() mensagemTitulo: string = 'Lista de categorias';

  constructor() { }

  ngOnInit(): void {
  }

}

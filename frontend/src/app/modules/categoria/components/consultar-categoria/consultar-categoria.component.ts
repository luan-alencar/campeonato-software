import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-categoria',
  templateUrl: './consultar-categoria.component.html',
  styleUrls: ['./consultar-categoria.component.css']
})
export class ConsultarCategoriaComponent implements OnInit {

  @Input() categoria: string = 'Categorias';
  constructor() { }

  ngOnInit(): void {
  }

}

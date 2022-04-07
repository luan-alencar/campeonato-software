import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/domain/categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  categorias: Categoria[] = [];
  categoria = new Categoria();
    
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias();
    this.buscarValoresNulos();
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  buscarValoresNulos () {
    var tdValue = document.querySelector('td');
    tdValue.addEventListener('change', metodo);
   
    function metodo(): void {
      
      switch(tdValue) {

        case null: 
          'asdfasd';
      }
    }
  }


 
}

  


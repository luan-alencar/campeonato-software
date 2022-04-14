import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { SelectItem } from 'primeng';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Categoria } from 'src/app/domain/categoria';
import { MensagensUtils } from 'src/app/shared/enumeration/mensagens-utils';
import { EventoAtualizarTabelaDinamica } from 'src/app/shared/models/evento-atualizar-tabela-dinamica';
import { CategoriaService } from '../../service/categoria.service';
import { CategoriaUtil } from '../../util/categoria-util';

@Component({
  selector: 'app-consultar-categoria',
  templateUrl: './consultar-categoria.component.html',
  styleUrls: ['./consultar-categoria.component.css']
})
export class ConsultarCategoriaComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  @Input() categoria: string = 'Categorias';
  @Output() mensagemTitulo: string = 'Lista de categorias';
  @Output() categoriaEvent = new EventEmitter<Categoria>();

  categorias: Categoria[] = [];
  colunasTabela = CategoriaUtil.COLUNAS_PADRAO;
  exibirDialog: boolean = false;
  formularioEdicao: boolean;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias() {
    this.blockUI.start(MensagensUtils.BUSCANDO);
    this.categoriaService.listar().pipe(
      
      finalize(() => this.blockUI.stop()))
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      }
    );
  }

  mostrarDialog(edicao = false): void {
    this.exibirDialog = true;
    this.formularioEdicao = edicao;
  }

  fecharDialog(usuarioSalvo: Categoria) {
    this.categoriaEvent.emit(usuarioSalvo);
  }
}

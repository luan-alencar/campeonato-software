import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng';
import { Categoria } from 'src/app/domain/categoria';
import { CategoriaService } from '../../service/categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {

  @Input() edicao = false;
  @Input() categoria = new Categoria();
  @Output() mensagemTitulo: string = 'Cadastro de categorias';

  dialog: boolean = false;
  formCategoria: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edicao = true;
        this.buscarCategoria(params.id);
      }
    });
    this.formCategoria = this.formBuilder.group({
      titulo: '',
      descricao: '',
      idade: '',
      pesoInicio: '',
      pesoLimite: '',
      quantidadeVagas: '',
      quantidadeAtletas: ''
    });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Deseja salvar mesmo essa categoria?',
      accept: () => {
        this.salvar()
      }
    });
  }

  salvar() {

    if (this.edicao) {
      this.categoriaService.editar(this.categoria).subscribe(
        categoria => {
          this.addSingle("success", "Categoria editada", "")
          setTimeout(() => {
            this.router.navigate(['/categorias'])
          }, 1500)
        }, erro => {
          this.addSingle("warn", "Dados invalidos", erro.error.message)

        });
    } else {
      this.categoriaService.salvar(this.categoria).subscribe(
        categoria => {
          this.addSingle("success", "Categoria salva", "")
          setTimeout(() => {
            this.router.navigate(['/categorias'])
          }, 1500)
        }, erro => {
          this.addSingle("warn", "Dados invalidos", erro.error.message)

        }
      )
    }
  }

  addSingle(error, titulo, corpo ) {
    this.messageService.add({severity:error, summary:titulo, detail:corpo});
  }

  buscarCategoria(id: number) {
    this.categoriaService.buscarPorID(id)
      .subscribe((categoria: Categoria) => {
        this.categoria = categoria;
      });
  }

}

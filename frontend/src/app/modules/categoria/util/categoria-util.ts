import { ColunaTabelaDinamica } from "src/app/shared/models/coluna-tabela-dinamica";
import { LimitStringPipe } from "src/app/shared/pipes/limit-string.pipe";
import { RemoveTagsPipe } from "src/app/shared/pipes/remove-tags.pipe";

export class CategoriaUtil {

    static COLUNAS_PADRAO: ColunaTabelaDinamica[] = [
        {
            cabecalho: 'Título',
            parametro: 'nome',
            parametroOrdenacao: 'nome'
        },
        {
            cabecalho: 'Quantidade vagas',
            parametro: 'quantidadeVagas',
            parametroOrdenacao: 'quantidadeVagas',
            mascara: [{ token: LimitStringPipe, argumentos: [50] }, { token: RemoveTagsPipe, argumentos: [] }]
        }
    ];
}

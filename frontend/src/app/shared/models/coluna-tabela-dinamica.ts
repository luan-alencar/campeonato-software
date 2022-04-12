import { SelectItem } from "primeng";
import { TipoFiltroEnum } from "../enumeration/tipo-filtro-enum.enum";
import { PipeDinamico } from "./pipe-dinamico";

export class ColunaTabelaDinamica {
    cabecalho: string;
    parametro: string;
    parametroOrdenacao: string;
    // se acaoSituacao for null seu valor sera false
    acaoSituacao ?= false;
    mascara?: PipeDinamico[] = [];
    tipoFiltro?: TipoFiltroEnum;
    opcoes?: SelectItem[] = [];
    larguraColuna ?= '400px';
}

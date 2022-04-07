import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/domain/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlCategoria = `${environment.apiUrl}/categorias`;
  
  constructor(private http: HttpClient) { }

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.urlCategoria}`);
  }

  buscarPorID(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlCategoria}/${id}`);
  }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.urlCategoria}/salvar`, categoria);
  }

  editar(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.urlCategoria}/editar`, categoria);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../funcionario.model';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  private funcionariosUrl: string = 'http://localhost:3000/funcionarios';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(public http: HttpClient) {}

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.funcionariosUrl, this.httpOptions);
  }

  get(id: any): Observable<Funcionario> {
    const url = `${this.funcionariosUrl}/${id}`;
    return this.http.get<Funcionario>(url);
  }

  create(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(
      this.funcionariosUrl,
      funcionario,
      this.httpOptions
    );
  }

  delete(funcionario: Funcionario | number): Observable<Funcionario> {
    const id = typeof funcionario == 'number' ? funcionario : funcionario.id;
    const url = `${this.funcionariosUrl}/${id}`;
    return this.http.delete<Funcionario>(url, this.httpOptions);
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    const url = `${this.funcionariosUrl}/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario, this.httpOptions);
  }
}

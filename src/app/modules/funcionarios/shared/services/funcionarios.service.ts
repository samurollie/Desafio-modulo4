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
}

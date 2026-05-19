import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private apiUrl = `${environment.baseURL}/matricula`;

  constructor(private http: HttpClient) { }

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.apiUrl);
  }

  getMatricula(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.apiUrl}/${id}`);
  }
}

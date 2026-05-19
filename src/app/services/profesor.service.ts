import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private apiUrl = `${environment.baseURL}/profesor`;

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrl);
  }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.apiUrl}/${id}`);
  }
}

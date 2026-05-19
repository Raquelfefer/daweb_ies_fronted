import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private apiUrl = `${environment.baseURL}/asignatura`;

  constructor(private http: HttpClient) { }

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.apiUrl);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.apiUrl}/${id}`);
  }
}

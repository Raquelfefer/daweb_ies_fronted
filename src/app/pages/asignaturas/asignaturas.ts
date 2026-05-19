import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search, Plus, Edit, Trash, LucideAngularModule } from 'lucide-angular';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './asignaturas.html',
  styleUrl: './asignaturas.css'
})
export class AsignaturasComponent implements OnInit {
  subjects: Asignatura[] = [];

  constructor(
    private asignaturaService: AsignaturaService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe({
      next: (data) => {
        this.subjects = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching asignaturas:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/asignaturas', id]);
  }

  verAlumnos(id: number): void {
    this.router.navigate(['/matriculados-asignatura', id]);
  }
}


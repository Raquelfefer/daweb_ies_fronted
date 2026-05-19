import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search, Plus, MoreVertical, Edit, Trash, LucideAngularModule } from 'lucide-angular';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => {
        this.alumnos = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching alumnos:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/alumnos', id]);
  }
}


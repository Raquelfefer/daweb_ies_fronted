import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search, Plus, Edit, Trash, LucideAngularModule } from 'lucide-angular';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css'
})
export class ProfesoresComponent implements OnInit {
  profesores: Profesor[] = [];

  constructor(
    private profesorService: ProfesorService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe({
      next: (data) => {
        this.profesores = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching profesores:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/profesores', id]);
  }
}


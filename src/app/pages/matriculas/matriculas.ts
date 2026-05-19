import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardList, Plus, Search, Edit, Trash, LucideAngularModule } from 'lucide-angular';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css'
})
export class MatriculasComponent implements OnInit {
  matriculas: Matricula[] = [];

  constructor(
    private matriculaService: MatriculaService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matriculaService.getMatriculas().subscribe({
      next: (data) => {
        this.matriculas = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error fetching matriculas:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/matriculas', id]);
  }
}


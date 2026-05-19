import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { MatriculaService } from '../../services/matricula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Asignatura } from '../../models/asignatura.model';
import { AsignaturaService } from '../../services/asignatura.service';

@Component({
  selector: 'app-matriculados-asignatura',
  imports: [CommonModule],
  templateUrl: './matriculados-asignatura.html',
  styleUrl: './matriculados-asignatura.css',
})
export class MatriculadosAsignatura implements OnInit {
  alumnosMatriculados: Alumno[] = [];
  asignatura: Asignatura | null = null;
  loading: boolean = true;

  constructor(
    private matriculaService: MatriculaService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private asignaturaService: AsignaturaService
  ){}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.asignaturaService.getAsignatura(id).subscribe({
        next: (asignatura) => {
          this.asignatura = asignatura;
        }
      });
      this.matriculaService.getMatriculas().subscribe({
        next: (data) => {
          this.alumnosMatriculados = data.filter(m => m.asignatura.id === id).map(m => m.alumno);
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching alumno:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.loading = false;
    }

    
  }

  verDetalle(id: number): void {
    this.router.navigate(['/alumnos', id]);
  }

  volver(): void {
    this.router.navigate(['/asignaturas']);
  }
}

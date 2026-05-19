import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumno-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-detalle.html',
  styleUrl: './alumno-detalle.css'
})
export class AlumnoDetalleComponent implements OnInit {
  alumno: Alumno | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alumnoService: AlumnoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.alumnoService.getAlumno(id).subscribe({
        next: (data) => {
          this.alumno = data;
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

  volver(): void {
    this.router.navigate(['/alumnos']);
  }
}

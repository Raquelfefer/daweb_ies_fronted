import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'app-profesor-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesor-detalle.html',
  styleUrl: './profesor-detalle.css'
})
export class ProfesorDetalleComponent implements OnInit {
  profesor: Profesor | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesorService: ProfesorService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.profesorService.getProfesor(id).subscribe({
        next: (data) => {
          this.profesor = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching profesor:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.loading = false;
    }
  }

  volver(): void {
    this.router.navigate(['/profesores']);
  }
}

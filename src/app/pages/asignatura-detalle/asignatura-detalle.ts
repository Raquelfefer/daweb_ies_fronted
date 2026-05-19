import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura.model';

@Component({
  selector: 'app-asignatura-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './asignatura-detalle.html',
  styleUrl: './asignatura-detalle.css'
})
export class AsignaturaDetalleComponent implements OnInit {
  asignatura: Asignatura | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private asignaturaService: AsignaturaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.asignaturaService.getAsignatura(id).subscribe({
        next: (data) => {
          this.asignatura = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching asignatura:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.loading = false;
    }
  }

  volver(): void {
    this.router.navigate(['/asignaturas']);
  }
}

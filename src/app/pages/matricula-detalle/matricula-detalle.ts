import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';

@Component({
  selector: 'app-matricula-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matricula-detalle.html',
  styleUrl: './matricula-detalle.css'
})
export class MatriculaDetalleComponent implements OnInit {
  matricula: Matricula | null = null;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matriculaService: MatriculaService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.matriculaService.getMatricula(id).subscribe({
        next: (data) => {
          this.matricula = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error fetching matricula:', error);
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.loading = false;
    }
  }

  volver(): void {
    this.router.navigate(['/matriculas']);
  }
}

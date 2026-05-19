import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Matricula } from '../../models/matricula.model';
import { MatriculaService } from '../../services/matricula.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-aprobados',
  imports: [CommonModule],
  templateUrl: './aprobados.html',
  styleUrl: './aprobados.css',
})
export class Aprobados implements OnInit{
  matriculasAprobadas: Matricula[] = [];

  constructor(
    private matriculaService: MatriculaService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {

    console.log('¿Zone.js está activo?:', (window as any).Zone !== undefined);
    this.matriculaService.getMatriculas().subscribe((datos: Matricula[]) => {
      this.matriculasAprobadas = datos.filter(m => m.notaMedia >= 5);
      this.cdr.detectChanges();
    });
  
    
  }


}

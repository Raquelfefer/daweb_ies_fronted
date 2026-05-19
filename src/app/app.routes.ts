import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { AlumnosComponent } from './pages/alumnos/alumnos';
import { ProfesoresComponent } from './pages/profesores/profesores';
import { AsignaturasComponent } from './pages/asignaturas/asignaturas';
import { MatriculasComponent } from './pages/matriculas/matriculas';
import { Aprobados } from './pages/aprobados/aprobados';
import { AlumnoDetalleComponent } from './pages/alumno-detalle/alumno-detalle';
import { ProfesorDetalleComponent } from './pages/profesor-detalle/profesor-detalle';
import { AsignaturaDetalleComponent } from './pages/asignatura-detalle/asignatura-detalle';
import { MatriculaDetalleComponent } from './pages/matricula-detalle/matricula-detalle';
import { MatriculadosAsignatura } from './pages/matriculados-asignatura/matriculados-asignatura';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'alumnos/:id', component: AlumnoDetalleComponent },
      { path: 'profesores', component: ProfesoresComponent },
      { path: 'profesores/:id', component: ProfesorDetalleComponent },
      { path: 'asignaturas', component: AsignaturasComponent },
      { path: 'asignaturas/:id', component: AsignaturaDetalleComponent },
      { path: 'matriculas', component: MatriculasComponent },
      { path: 'matriculas/:id', component: MatriculaDetalleComponent },
      { path: 'aprobados', component: Aprobados },
      { path: 'matriculados-asignatura/:id', component: MatriculadosAsignatura },
    ]
  }
];

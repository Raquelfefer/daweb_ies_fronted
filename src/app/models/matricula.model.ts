import { Alumno } from './alumno.model';
import { Asignatura } from './asignatura.model';

export class Matricula {
  constructor(
    public id: number = 0,
    public curso: number = 0,
    public notaMedia: number = 0,
    public alumno: Alumno = new Alumno(),
    public asignatura: Asignatura = new Asignatura()
  ) {}
}




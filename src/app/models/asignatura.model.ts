import { Profesor } from './profesor.model';

export class Asignatura {
  constructor(
    public id: number = 0,
    public nombre: string = '',
    public horas: number = 0,
    public profesor: Profesor | null = null
  ) {}
}



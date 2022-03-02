export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  telefono: number;
  rut: string;
  fechaNacimiento: string;
  direccion: Direccion;
  activo: number;
}

interface Direccion {
  calle: string;
  numero: number;
  comuna: string;
}

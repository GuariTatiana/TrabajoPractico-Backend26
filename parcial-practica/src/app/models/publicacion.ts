export interface Publicacion {
  _id?: string;
  Titulo: string;
  Contenido: string;
  ImagenAsociada: string;
  fechaPublicacion: string;
  vigente: boolean;
  empleadoId: string;
}
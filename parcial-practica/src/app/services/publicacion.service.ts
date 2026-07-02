import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from '../models/publicacion';


@Injectable({
  providedIn: 'root',
})
export class PublicacionService {

  urlBase = 'http://localhost:3000/api/empleados/publicaciones';

  constructor(private http: HttpClient) {}

  obtenerTodas(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.urlBase);
  }

  guardarPublicacion(publicacion: Publicacion): Observable<any> {
    return this.http.post(this.urlBase, publicacion);
  }

  eliminarPublicacion(id: string): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`);
  }

  modificarPublicacion(id: number, publicacion: Publicacion): Observable<any> {
    return this.http.put(`${this.urlBase}/${id}`, publicacion);
  }

  filtrarPublicaciones(titulo: string, vigente: boolean) {
    return this.http.get<Publicacion[]>(
      `${this.urlBase}/search?titulo=${titulo}&vigente=${vigente}`
    );
  }
}


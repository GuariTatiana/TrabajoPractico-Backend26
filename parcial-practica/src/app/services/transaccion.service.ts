import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root',
})
export class TransaccionService {

  private urlBase = 'http://localhost:3000/api/transacciones';
  
  constructor(private http: HttpClient) { }

   guardar(transaccion: Transaccion): Observable<any> {
    return this.http.post(this.urlBase, transaccion);
  }

  obtenerTodas(): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(this.urlBase);
  }

  obtenerPorEmail(email: string): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(`${this.urlBase}/cliente/${email}`);
  }

  obtenerPorIdiomas(origen: string, destino: string): Observable<Transaccion[]> {
    return this.http.get<Transaccion[]>(
      `${this.urlBase}/idiomas/${origen}/${destino}`
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TransaccionService } from '../../services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion.html',
  styleUrl: './transaccion.css',
})
export class TransaccionComponent {
    textoOrigen: string = '';
  idiomaOrigen: string = '';
  idiomaDestino: string = '';
  emailCliente: string = '';
  textoDestino: string = '';

  constructor(
    private http: HttpClient,
    private transaccionService: TransaccionService
  ) {}

 traducirTexto(): void {

  this.http.post<any>(
    'http://localhost:3000/api/transacciones/traducir',
    {
      texto: this.textoOrigen,
      origen: this.idiomaOrigen,
      destino: this.idiomaDestino
    }
  ).subscribe({
    next: (respuesta) => {
      console.log('Respuesta de traducción:', respuesta);
      this.textoDestino = respuesta.translatedText;
      this.guardarTransaccion();
    },
    error: (error) => {
      console.log('Error al traducir', error);
    }
  });
}

  guardarTransaccion(): void {
    const nuevaTransaccion = {
      IdiomaOrigen: this.idiomaOrigen,
      TextoOrigen: this.textoOrigen,
      IdiomaDestino: this.idiomaDestino,
      TextoDestino: this.textoDestino,
      emailCliente: this.emailCliente
    };

    this.transaccionService.guardar(nuevaTransaccion)
      .subscribe({
        next: (res) => {
          console.log('Transacción guardada', res);
        },
        error: (err) => {
          console.log('Error al guardar', err);
        }
      });
  }
}


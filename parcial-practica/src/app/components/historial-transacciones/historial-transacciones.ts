import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-historial-transacciones',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historial-transacciones.html',
  styleUrl: './historial-transacciones.css',
})
export class HistorialTransaccionesComponent {
  transacciones: Transaccion[] = [];

  origen: string = '';
  destino: string = '';

  constructor(private transaccionService: TransaccionService) {}

  recuperarTodos(): void {
    this.transaccionService.obtenerTodas()
      .subscribe(data => {
        this.transacciones = data;
      });
  }

  recuperarPorFiltro(): void {
    this.transaccionService.obtenerPorIdiomas(this.origen, this.destino)
      .subscribe(data => {
        this.transacciones = data;
      });
  }
}

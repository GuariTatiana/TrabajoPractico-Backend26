import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../models/publicacion';

@Component({
  selector: 'app-publicaciones-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './publicaciones-list.html',
  styleUrl: './publicaciones-list.css',
})
export class PublicacionesList {
  publicaciones: Publicacion[] = [];

  titulo: string = '';
  vigente: boolean = true;

  constructor(private publicacionService: PublicacionService) {}

  recuperarTodos(): void {
    this.publicacionService.obtenerTodas()
      .subscribe(data => {
        console.log(data);
        this.publicaciones = data;
      });
  }

  recuperarPorFiltro(): void {
    this.publicacionService.filtrarPublicaciones(
      this.titulo,
      this.vigente
    ).subscribe(data => {
      this.publicaciones = data;
    });
  }

  eliminarPublicacion(id: string): void {
    this.publicacionService.eliminarPublicacion(id)
      .subscribe(() => {
        console.log('Publicacion eliminada');
        this.recuperarTodos();
      });
  }

  
}

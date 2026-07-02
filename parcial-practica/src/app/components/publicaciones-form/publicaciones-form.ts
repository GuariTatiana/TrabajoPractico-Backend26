import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PublicacionService } from '../../services/publicacion.service';
import { Publicacion } from '../../models/publicacion';

@Component({
  selector: 'app-publicaciones-form',
  imports: [FormsModule],
  templateUrl: './publicaciones-form.html',
  styleUrl: './publicaciones-form.css',
})
export class PublicacionesForm {
  publicacion: Publicacion = {
  Titulo: '',
  Contenido: '',
  ImagenAsociada: '',
  fechaPublicacion: '',
  vigente: true,
  empleadoId: ''
};

  constructor(private publicacionService: PublicacionService) {}

  guardarPublicacion(): void {

    if (!this.publicacion.Titulo || !this.publicacion.Contenido) {
      alert('Complete todos los campos');
      return;
    }

    this.publicacionService.guardarPublicacion(this.publicacion)
      .subscribe(res => {
        console.log('Publicación guardada', res);
      });
  }
}

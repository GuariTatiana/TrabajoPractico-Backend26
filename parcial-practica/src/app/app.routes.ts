import { Routes } from '@angular/router';
import { TransaccionComponent } from './components/transaccion/transaccion';
import { HistorialTransaccionesComponent } from './components/historial-transacciones/historial-transacciones';
import { PublicacionesList } from './components/publicaciones-list/publicaciones-list';
import { PublicacionesForm } from './components/publicaciones-form/publicaciones-form';

export const routes: Routes = [
    { path:'transacciones', component:TransaccionComponent },
    { path:'historial', component:HistorialTransaccionesComponent },
    { path:'publicaciones', component:PublicacionesList },
    { path:'publicaciones/nueva', component:PublicacionesForm },
    { path:'publicaciones/editar/:id', component:PublicacionesForm } 
];

import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearPlatoComponent } from './pages/crear-plato/crear-plato.component';
import { InfoPlatoComponent } from './pages/info-plato/info-plato.component';
import { EditarPlatoComponent } from './pages/editar-plato/editar-plato.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'crear-plato',
    component: CrearPlatoComponent
  },
  {
    path: 'plato/:platoId',
    component: InfoPlatoComponent
  },
  {
    path: 'plato/:platoId/editar',
    component: EditarPlatoComponent
  },
  {
    path: '',
    redirectTo: () => {
      return 'inicio'
    },
    pathMatch: 'full'
  },
  // La siguiente tiene que ir siempre al final
  {
    path: '**',
    component: Error404Component
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogueoPage } from './logueo.page';
import { InicioPageModule } from '../inicio/inicio.module';

const routes: Routes = [
  {
    path: '',
    component: LogueoPage
  },
{ path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogueoPageRoutingModule {}

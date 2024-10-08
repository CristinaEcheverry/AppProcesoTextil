import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespachosPage } from './despachos.page';

const routes: Routes = [
  {
    path: '',
    component: DespachosPage
  },
  { path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespachosPageRoutingModule {}

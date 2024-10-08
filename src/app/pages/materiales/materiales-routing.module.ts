import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialesPage } from './materiales.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialesPage
  },
  { path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialesPageRoutingModule {}

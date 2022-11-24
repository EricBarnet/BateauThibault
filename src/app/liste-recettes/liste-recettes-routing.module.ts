import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRecettesPage } from './liste-recettes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRecettesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRecettesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionListeProduitsPage } from './selection-liste-produits.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionListeProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionListeProduitsPageRoutingModule {}

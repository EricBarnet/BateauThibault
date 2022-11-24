import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRestaurantsPage } from './liste-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRestaurantsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRestaurantsPageRoutingModule } from './liste-restaurants-routing.module';

import { ListeRestaurantsPage } from './liste-restaurants.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRestaurantsPageRoutingModule,
    SharedModule
  ],
  declarations: [ListeRestaurantsPage]
})
export class ListeRestaurantsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRecettesPageRoutingModule } from './liste-recettes-routing.module';

import { ListeRecettesPage } from './liste-recettes.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRecettesPageRoutingModule,
    SharedModule
  ],
  declarations: [ListeRecettesPage]
})
export class ListeRecettesPageModule {}

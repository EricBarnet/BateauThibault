import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionListeProduitsPageRoutingModule } from './selection-liste-produits-routing.module';

import { SelectionListeProduitsPage } from './selection-liste-produits.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionListeProduitsPageRoutingModule,
    SharedModule
  ],
  declarations: [SelectionListeProduitsPage]
})
export class SelectionListeProduitsPageModule {}

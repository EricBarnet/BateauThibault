import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UneRecettePageRoutingModule } from './une-recette-routing.module';

import { UneRecettePage } from './une-recette.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UneRecettePageRoutingModule,
    SharedModule
  ],
  declarations: [UneRecettePage]
})
export class UneRecettePageModule {}

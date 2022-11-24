import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnRestaurantPageRoutingModule } from './un-restaurant-routing.module';

import { UnRestaurantPage } from './un-restaurant.page';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [UnRestaurantPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UnRestaurantPageRoutingModule,
        SharedModule
    ]
})
export class UnRestaurantPageModule {}

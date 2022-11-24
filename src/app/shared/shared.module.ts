import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { InformationContactComponent } from "../information-contact/information-contact.component";

@NgModule({
    declarations: [InformationContactComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [InformationContactComponent]
})

export class SharedModule {}
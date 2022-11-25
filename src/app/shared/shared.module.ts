//imports de base
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

//import des components
import { InformationContactComponent } from "../information-contact/information-contact.component";
import { HeaderComponent } from "../header/header.component";
import { FooterMenuComponent } from "../footer-menu/footer-menu.component";

@NgModule({
    declarations: [InformationContactComponent, HeaderComponent, FooterMenuComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [InformationContactComponent, HeaderComponent, FooterMenuComponent]
})

export class SharedModule {}
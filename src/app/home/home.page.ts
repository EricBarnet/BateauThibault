import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {

  }
  
  onGoToBateaux(){
    this.router.navigate(['/tab-bar/bateaux']);
  }

  onGoToContact(){
    this.router.navigate(['/tab-bar/contact']);
  }

  onGoToListeRecettes(){
    this.router.navigate(['/tab-bar/liste-recettes']);
  }

  onGoToListeRestaurants(){
    this.router.navigate(['/tab-bar/liste-restaurants']);
  }

  onGoToProduitCategorie(){
    this.router.navigate(['/tab-bar/produit-categorie']);
  }
}

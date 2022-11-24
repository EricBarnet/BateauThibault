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
    this.router.navigate(['/bateaux']);
  }

  onGoToContact(){
    this.router.navigate(['/contact']);
  }

  onGoToListeRecettes(){
    this.router.navigate(['/liste-recettes']);
  }

  onGoToListeRestaurants(){
    this.router.navigate(['/liste-restaurants']);
  }

  //faire la route pour produits&promos
}

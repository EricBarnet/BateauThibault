import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Panier } from 'src/models/panier';
import { Product } from 'src/models/products';
import { ProduitsService } from '../services/produits.service';
import { PanierPage } from '../panier/panier.page';

@Component({
  selector: 'app-selection-liste-produits',
  templateUrl: './selection-liste-produits.page.html',
  styleUrls: ['./selection-liste-produits.page.scss'],
})
export class SelectionListeProduitsPage implements OnInit {
  listPanier: Panier[] = [];
  contenuPanier!: Panier[];
  produitsList!: Product[];
  constructor(private route: ActivatedRoute, private service:ProduitsService, private router: Router) { }
  
  voirPanier() {
    console.log(this.listPanier);
    let navigationExtras: NavigationExtras = {
      state: {
        contenuPanier: this.listPanier
      }
    };
    this.router.navigate(['/tab-bar/panier'], navigationExtras);
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produitsList = this.router.getCurrentNavigation()!.extras.state!['produitsByIdCategorie'];
        console.log(this.produitsList);
      }
    });
  }

  


  onCart(produitId: number){
    console.log(produitId); 
    for(let p of this.produitsList){
      console.log("entree du for")
      if(produitId == p.id){
        console.log("panier add produit");
        this.listPanier.push(p);
      }
    }
    console.log(this.listPanier);
    return this.listPanier;
  }
  
}

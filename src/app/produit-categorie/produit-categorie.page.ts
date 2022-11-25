import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/products';
import { ProduitsService } from '../services/produits.service';
@Component({
  selector: 'app-produit-categorie',
  templateUrl: './produit-categorie.page.html',
  styleUrls: ['./produit-categorie.page.scss'],
})
export class ProduitCategoriePage implements OnInit {
  produitsList!: Product[];

  constructor(private service:ProduitsService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(res=>{
      this.produitsList = res;
      },
      err =>{
        console.log("error")
      }
    );
  }


}

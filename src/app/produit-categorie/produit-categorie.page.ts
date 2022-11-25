import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Categorie } from 'src/models/categorie';
import { Product } from 'src/models/products';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-produit-categorie',
  templateUrl: './produit-categorie.page.html',
  styleUrls: ['./produit-categorie.page.scss'],
})
export class ProduitCategoriePage implements OnInit {
  produitsList!: Product[]; 
  categorieList: Categorie[] = [{name:"Poissons", id: 0}, {name:"Crustacés", id: 1}, {name:"Fruit de Mer", id:2}, {name:"Promotion", id: 3}];
  constructor(private service:ProduitsService, private router: Router) { }
  
  ngOnInit() {
    this.service.getProduits().subscribe(res=>{
      this.produitsList = res;
      console.log(this.produitsList);
      },
      err =>{
        console.log("error")
      }
    );
  }

  test(){
    console.log("toto");

  }
  
  onLoadCategorieProduit(categorie: Categorie) {
    console.log(categorie.name);
    var listeProduitById = this.getProductsById(categorie.id);
    let navigationExtras: NavigationExtras = {
      state: {
        produitsByIdCategorie: listeProduitById
       }
    };
    this.router.navigate(['/selection-liste-produits'], navigationExtras);
  }

  getProductsById(id: number){
    var produitCategorie = [];
    console.log(id);
    for(let p of this.produitsList){
      console.log("entree dans le for");
      console.log(p.category);
      if(id == p.category){
        console.log("test");
        produitCategorie.push(p);
      }
    }
    console.log(produitCategorie);
    return produitCategorie;
  }

}

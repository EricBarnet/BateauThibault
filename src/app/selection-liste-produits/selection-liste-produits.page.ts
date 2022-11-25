import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/products';
import { ProduitsService } from '../services/produits.service';
@Component({
  selector: 'app-selection-liste-produits',
  templateUrl: './selection-liste-produits.page.html',
  styleUrls: ['./selection-liste-produits.page.scss'],
})
export class SelectionListeProduitsPage implements OnInit {

  produitsList!: Product[];
  constructor(private route: ActivatedRoute, private service:ProduitsService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.produitsList = this.router.getCurrentNavigation()!.extras.state!['produitsByIdCategorie'];
        console.log(this.produitsList);
      }
    });
  }

}

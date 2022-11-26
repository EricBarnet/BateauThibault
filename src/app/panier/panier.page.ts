import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Panier } from 'src/models/panier';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  
  contenuPanier!: Panier[];
  
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.contenuPanier = this.router.getCurrentNavigation()!.extras.state!['contenuPanier'];
        console.log(this.contenuPanier);
      }
    });
   }
  
  
  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
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
  alertCtrl: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation()!.extras.state) {
        this.contenuPanier =
          this.router.getCurrentNavigation()!.extras.state!['contenuPanier'];
        console.log(this.contenuPanier);
      }
    });
  }
  
  /*supprimerElement(listePanier: number) {
    let alert = this.alertCtrl.create({
        title: 'Confirm delete user',
        message: 'Are you sure you want to permanently delete this user?',
        buttons: [
            {
                text: 'No',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Yes',
                handler: () => {
                   this.contenuPanier.splice(listePanier, 1);
                }
            }
        ]
    })
  }
  */

  ngOnInit() {}
}

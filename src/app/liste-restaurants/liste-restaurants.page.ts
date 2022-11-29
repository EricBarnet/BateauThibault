import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-restaurants',
  templateUrl: './liste-restaurants.page.html',
  styleUrls: ['./liste-restaurants.page.scss'],
})
export class ListeRestaurantsPage implements OnInit {

  constructor(private router: Router) { }

  onGoToUnRestaurant(){
    this.router.navigate(['/tab-bar/un-restaurant']);
  }

  ngOnInit() {
  }

}

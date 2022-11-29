import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-recettes',
  templateUrl: './liste-recettes.page.html',
  styleUrls: ['./liste-recettes.page.scss'],
})
export class ListeRecettesPage implements OnInit {

  constructor(private router: Router) { }

  onGoToUneRecette(){
    this.router.navigate(['/tab-bar/une-recette']);
  }

  ngOnInit() {
  }

}

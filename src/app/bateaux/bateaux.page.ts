import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {

  constructor(private router: Router) { }

  onGoToContact(){
    this.router.navigate(['/tab-bar/contact']);
  }

  onGoToUnBateau(){
    this.router.navigate(['/tab-bar/un-bateau']);
  }

  ngOnInit() {
  }

}
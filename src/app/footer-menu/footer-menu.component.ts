import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  
  constructor(private router: Router) { }

  onGoToHome() {
    this.router.navigate(['/home']);
  }
  onGoToPanier() {
    this.router.navigate(['/panier']);
  }

  ngOnInit() {}
}

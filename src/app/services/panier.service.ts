import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/products';
import { BehaviorSubject, Subject } from 'rxjs';
import { Panier } from 'src/models/panier';

// @Injectable({
//   providedIn: 'root'
// })

// export class PanierService{
  
//     private panier$ = new BehaviorSubject<any>({});
//     panierlist$ = this.panier$.asObservable();

//     contenuPanier(panier: Panier){
//         this.p
//     }
//     constructor() { }
// }

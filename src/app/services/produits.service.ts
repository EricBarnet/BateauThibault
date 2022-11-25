import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/products';

@Injectable({
  providedIn: 'root'
})

export class ProduitsService{
  produitsList!: Product[];

  constructor(private httpService: HttpClient) { }

  getProducts() {
    return this.httpService.get<Product[]>('../../assets/data/products.json');
  }
}

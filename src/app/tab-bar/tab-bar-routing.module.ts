import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../home/home.module';
import { HomePage } from '../home/home.page';

import { TabBarPage } from './tab-bar.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab-bar/home',
    pathMatch: 'full',
  },
  {
    path: 'tab-bar',
    component: TabBarPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(
                (m) => m.ContactPageModule
              ),
          },
        ],
      },
      {
        path: 'bateaux',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../bateaux/bateaux.module').then(
                (m) => m.BateauxPageModule
              ),
          },
        ],
      },
      {
        path: 'un-bateau',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../un-bateau/un-bateau.module').then(
                (m) => m.UnBateauPageModule
              ),
          },
        ],
      },
      {
        path: 'liste-recettes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../liste-recettes/liste-recettes.module').then(
                (m) => m.ListeRecettesPageModule
              ),
          },
        ],
      },
      {
        path: 'une-recette',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../une-recette/une-recette.module').then(
                (m) => m.UneRecettePageModule
              ),
          },
        ],
      },
      {
        path: 'liste-restaurants',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../liste-restaurants/liste-restaurants.module').then(
                (m) => m.ListeRestaurantsPageModule
              ),
          },
        ],
      },
      {
        path: 'un-restaurant',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../un-restaurant/un-restaurant.module').then(
                (m) => m.UnRestaurantPageModule
              ),
          },
        ],
      },
      {
        path: 'produit-categorie',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../produit-categorie/produit-categorie.module').then(
                (m) => m.ProduitCategoriePageModule
              ),
          },
        ],
      },
      {
        path: 'selection-liste-produits',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../selection-liste-produits/selection-liste-produits.module'
              ).then((m) => m.SelectionListeProduitsPageModule),
          },
        ],
      },
      {
        path: 'panier',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../panier/panier.module').then((m) => m.PanierPageModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}

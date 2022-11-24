import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'un-bateau',
    loadChildren: () => import('./un-bateau/un-bateau.module').then( m => m.UnBateauPageModule)
  },
  {
<<<<<<< HEAD
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
=======
    path: 'une-recette',
    loadChildren: () => import('./une-recette/une-recette.module').then( m => m.UneRecettePageModule)
  }
>>>>>>> 70316126ef487c85838c3555700ca29fa24b02a2
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

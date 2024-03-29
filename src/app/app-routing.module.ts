//ATTENTION : IL FAUT BIEN CHANGER LE TAB-BAR.MODULE LES LIENS VERS LES FICHIERS PAR RAPPORT A OU SE TROUVER LES DOSSIERS DANS VOTRE PC LOCAL

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then (m => m.TabBarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

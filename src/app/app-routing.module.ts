import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddPage } from './add/add.page';
import { DetailPage } from './detail/detail.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'notes',
    component: HomePage,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DetailPage,
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },

  {
    path: 'add',
    component:AddPage,
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

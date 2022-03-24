import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPage } from '../add/add.page';
import { DetailPage } from '../detail/detail.page';
import { HomePage } from './home.page';


const routes: Routes = [
  // { path: '', redirectTo: 'notes', pathMatch: 'full' },
  // { path: 'notes', component: HomePage },
  // {
  //   path: 'notes/:id',
  //   component: DetailPage,
  // },
  // {
  //   path: 'add',
  //   component: AddPage,
  // }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

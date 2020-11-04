import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagePage } from './page.page';

const routes: Routes = [
  {
    path: '',
    component: PagePage
  },
  {
    path: 'subpage',
    loadChildren: () => import('./subpage/subpage.module').then( m => m.SubpagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagePageRoutingModule {}

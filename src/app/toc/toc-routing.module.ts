import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TocPage } from './toc.page';

const routes: Routes = [
  {
    path: '',
    component: TocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TocPageRoutingModule {}

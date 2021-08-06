import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastpagePage } from './lastpage.page';

const routes: Routes = [
  {
    path: '',
    component: LastpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastpagePageRoutingModule {}

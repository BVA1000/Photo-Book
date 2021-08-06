import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastpagePageRoutingModule } from './lastpage-routing.module';

import { LastpagePage } from './lastpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastpagePageRoutingModule
  ],
  declarations: [LastpagePage]
})
export class LastpagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TocPageRoutingModule } from './toc-routing.module';

import { TocPage } from './toc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TocPageRoutingModule
  ],
  declarations: [TocPage]
})
export class TocPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ArmsPageRoutingModule } from './arms-routing.module';

import { ArmsPage } from './arms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ArmsPageRoutingModule
  ],
  declarations: [ArmsPage]
})
export class ArmsPageModule {}

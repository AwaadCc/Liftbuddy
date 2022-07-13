import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LegsPageRoutingModule } from './legs-routing.module';

import { LegsPage } from './legs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    LegsPageRoutingModule
  ],
  declarations: [LegsPage]
})
export class LegsPageModule {}

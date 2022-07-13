import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { BackPageRoutingModule } from './back-routing.module';

import { BackPage } from './back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    BackPageRoutingModule
  ],
  declarations: [BackPage]
})
export class BackPageModule {}

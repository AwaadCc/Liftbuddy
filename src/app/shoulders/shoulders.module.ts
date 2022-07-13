import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ShouldersPageRoutingModule } from './shoulders-routing.module';

import { ShouldersPage } from './shoulders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ShouldersPageRoutingModule
  ],
  declarations: [ShouldersPage]
})
export class ShouldersPageModule {}

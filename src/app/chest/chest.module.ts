import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ChestPageRoutingModule } from './chest-routing.module';

import { ChestPage } from './chest.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ChestPageRoutingModule
  ],
  declarations: [ChestPage]
})
export class ChestPageModule {}

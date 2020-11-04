import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubpagePageRoutingModule } from './subpage-routing.module';

import { SubpagePage } from './subpage.page';
import { SubpageService } from './subpage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubpagePageRoutingModule
  ],
  declarations: [SubpagePage],
  providers: [
      SubpageService
  ]
})
export class SubpagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePageRoutingModule } from './page-routing.module';

import { PagePage } from './page.page';
import { SubpagePageModule } from './subpage/subpage.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PagePageRoutingModule,
        SubpagePageModule,
    ],
    declarations: [PagePage],
})
export class PagePageModule {
}

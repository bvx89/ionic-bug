import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { AppService } from '../app-service.service';
import { SubpagePage } from './subpage/subpage.page';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  constructor(
      private readonly modalCtrl: ModalController,
      private readonly appService: AppService,
      private readonly popoverCtrl: PopoverController,
  ) { }

  ngOnInit() {
  }

  public faultyPopover(event: Event) {
    return this.appService.presentPopover({
      component: SubpagePage,
      event
    });
  }

  public async workingPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: SubpagePage,
      event
    });
    return popover.present();
  }

  public faultyModal() {
    return this.appService.presentModal({
      component: SubpagePage
    });
  }

  public async workingModal() {
    const modal = await this.modalCtrl.create({
      component: SubpagePage
    });
    return modal.present();
  }
}

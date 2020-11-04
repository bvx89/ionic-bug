import { Injectable } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalOptions, PopoverOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
      private readonly modalCtrl: ModalController,
      private readonly popoverCtrl: PopoverController,
  ) {
  }

  async presentModal(props: ModalOptions) {
    const modal = await this.modalCtrl.create(props);
    return modal.present();
  }

  async presentPopover(props: PopoverOptions) {
    const popover = await this.popoverCtrl.create(props);
    return popover.present();
  }
}

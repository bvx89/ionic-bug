import { Component, OnInit } from '@angular/core';
import { SubpageService } from './subpage.service';
import { AppService } from '../../app-service.service';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
})
export class SubpagePage implements OnInit {

  constructor(
      private readonly subPageService: SubpageService,
  ) { }

  ngOnInit() {
  }
}

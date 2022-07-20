import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Event } from '@stencil/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonContent) private content: IonContent;
  constructor() {}

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  list: any;
  @ViewChild(IonContent) private content: IonContent;

  constructor(private iab:InAppBrowser, private router:Router, private dataService:DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.list = data['selection1'];
    });
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  goInfo() {
    this.router.navigate(['/tabs/tab1/info'])
  }
  goPage2() {
    this.router.navigate(['/tabs/tab1/page2'])
  }
}
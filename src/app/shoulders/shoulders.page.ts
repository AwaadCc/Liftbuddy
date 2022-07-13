import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-shoulders',
  templateUrl: './shoulders.page.html',
  styleUrls: ['./shoulders.page.scss'],
})
export class ShouldersPage implements OnInit {
  Filter: string;
  shouldersList: any;
  constructor(private iab:InAppBrowser, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getShouldersData().subscribe(data => {
      this.shouldersList = data['selection1'];
    })
  }
  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.page.html',
  styleUrls: ['./legs.page.scss'],
})
export class LegsPage implements OnInit {
  Filter: string;
  legsList: any;
  constructor(private iab:InAppBrowser, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getLegsData().subscribe(data => {
      this.legsList = data['selection1'];
    })
  }
  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');

  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-arms',
  templateUrl: './arms.page.html',
  styleUrls: ['./arms.page.scss'],
})
export class ArmsPage implements OnInit {
  Filter: string;
  armsList: any;
  constructor(private iab:InAppBrowser, private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getArmsData().subscribe(data => {
      this.armsList = data['selection1'];
    })
  }
  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');

  }

}
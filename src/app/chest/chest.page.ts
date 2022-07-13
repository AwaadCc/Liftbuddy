import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.page.html',
  styleUrls: ['./chest.page.scss'],
})
export class ChestPage implements OnInit {
  Filter: string;
  chestList: any;
  constructor(private iab:InAppBrowser, private dataService:DataService) { 

  }

    openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');

  }

  ngOnInit() {
    this.dataService.getChestData().subscribe(data => {
      this.chestList = data['selection1'];
    }) 
  }

}

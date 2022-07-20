import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {
  Filter: string;
  backList: any;
  constructor(private iab:InAppBrowser, private dataService:DataService) { 

  }

  ngOnInit() {
    this.dataService.getBackData().subscribe(data => {
      this.backList = data['selection1'];
    }) 
  }
  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import SwiperCore, { Virtual } from 'swiper';
import { IonicSlides, IonContent } from '@ionic/angular';

SwiperCore.use([IonicSlides, Virtual])

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonContent) private content: IonContent;
  workoutList: any;
  stringlist: string;
  routineList: any;
  constructor(private iab:InAppBrowser, private router:Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getWorkoutData().subscribe(data => {
      this.workoutList = data['selection1'];
    });
  }

  ionViewWillEnter() {
    this.content.scrollToTop();
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');

  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  routine(url) {
    this.dataService.loadSite(url).subscribe(data => {
      this.routineList = data;
      this.saveFile();
    });
  }

  saveFile() {
    console.log(this.routineList);
    this.stringlist = JSON.stringify(this.routineList);
    console.log(this.stringlist);
    const fileName = 'routine';
    // console.log(fileName);
    var link = document.createElement('a');
    link.download = fileName;
    var blob = new Blob([this.stringlist], {type: 'application/json'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }

}

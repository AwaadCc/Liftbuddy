import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { StorageItem } from '../shared/storage-item';
import { Platform, IonContent, LoadingController } from '@ionic/angular';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { File } from '@awesome-cordova-plugins/file/ngx';
declare var require: any
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) private content: IonContent;
  list: StorageItem[];
  stringlist: string;
  subscription: any;
  inputfile: any;
  sm: string;
  constructor(private storage: Storage, private router: Router,
    private platform: Platform,
    private file: File,
    private loadingCtrl: LoadingController) { }
  ngOnInit(): void {



    this.router.events.subscribe(async (e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.list = await this.storage.get('notes') as StorageItem[];
        console.log(this.list);
      }
    });
  }


  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

ionViewWillLeave(){
    this.subscription.unsubscribe();
}

  isEmpty() {
    return this.list === undefined || this.list === null;
  }

  trackElement(item) {
    return item.key;
  }

  async updateItem(item) {
    let it = this.list.find((element) => {
      return element === item;
    });
    this.router.navigate(['/edit-note'], {state: {obj: item}});
    
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  save() {
    // console.log(this.list);
    this.stringlist = JSON.stringify(this.list);
    // console.log(this.stringlist);
    const fileName = this.list[0].title + '_' + new Date().getMonth() + '_' + new Date().getDate() + '_' + new Date().getFullYear() + '';
    // console.log(fileName);
    var link = document.createElement('a');
    link.download = fileName;
    var blob = new Blob([this.stringlist], {type: 'application/json'});
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }

async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading new routine...',
      duration: 1500
    });
    
    loading.present();
  }

  loadImageFromDevice(event) {
    this.showLoading();
    const inputfile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(inputfile);
    this.storage.remove('notes');
    setTimeout(() => {  
          this.sm = reader.result as string; 
          this.list = JSON.parse(this.sm);
          console.log(this.list);
          this.storage.set('notes', this.list);
        }, 1500);  

  };

}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  maxInput: string = "";
  age: string = "";
  weight:string = "";
  height:string = "";
  level: any;
  max: any;
  TDEE: any;
  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  showMax() {
    var a = parseInt(this.maxInput, 10);
    a = a / 2.205;
    this.max = (a*1.1307) + 0.6998;
    this.max = this.max * 2.205;
    if(!a) {
      this.showFail();
    } else {
      this.alertMax();
      console.log(a);
    }
  }

  showMacro() {
    var a = parseInt(this.age, 10);
    var w = parseInt(this.weight, 10);
    var h = parseInt(this.height, 10);
    w = w / 2.205;
    h = h * 2.54;
    var ree = (10*w)+(6.25*h)-(5*a)+5
    this.TDEE = ree * this.level;
    if(!a || !w || !h || !this.level) {
      this.showFail();
    } else {
      this.alertMacro();
    }
  }

  async alertMax() {
    const alert = await this.alertController.create({
      header: 'Your 1 RM is: ~' + this.max.toFixed() + 'lbs',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.maxInput = "";
          },
        },
      ],
    });

    await alert.present();
  }

  async alertMacro() {
    const alert = await this.alertController.create({
      header: 'Your TDEE ' + this.TDEE.toFixed(),
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.maxInput = "";
          },
        },
      ],
    });

    await alert.present();
  }

  async showFail() {
    const alert = await this.alertController.create({
      header: 'Invalid input!',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            this.maxInput = "";
          },
        },
      ],
    });

    await alert.present();
  }

  handleChange(e) {
      this.level = e.detail.value;
    }

}

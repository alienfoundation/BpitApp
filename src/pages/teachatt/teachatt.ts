import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AttpagePage } from '../attpage/attpage';
import { ConfirmattPage } from '../confirmatt/confirmatt';

/**
 * Generated class for the TeachattPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teachatt',
  templateUrl: 'teachatt.html',
})
export class TeachattPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachattPage');
  }

  confirmAtt() {
    this.navCtrl.push(ConfirmattPage);
  }

}

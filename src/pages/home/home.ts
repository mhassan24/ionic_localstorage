import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListsPage} from '../lists/lists';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name;

  constructor(public navCtrl: NavController) {

  }
  btn_click(){
    this.navCtrl.push(ListsPage,{name:this.name});
  }

}

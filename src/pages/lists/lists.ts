import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {global} from '../global/global';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
  name;
  details;
  results


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get('name');
    this.list_value();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  list_value(){
    if(localStorage.getItem('setvalue')!=null)
    {
        global.PROJECT_ARRAY= JSON.parse(localStorage.getItem('setvalue'));
   }
    this.details={Name:this.name};
    global.PROJECT_ARRAY.push(this.details);
    localStorage.setItem("setvalue",JSON.stringify(global.PROJECT_ARRAY));
    this.results=global.PROJECT_ARRAY;
  }

}

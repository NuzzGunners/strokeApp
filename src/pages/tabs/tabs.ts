import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  { HomePage} from '../../pages/home/home';
import  { ScreenPage} from '../../pages/screen/screen';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  screenRoot = ScreenPage;

  constructor(public navCtrl: NavController) {}

}

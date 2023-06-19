import { Component } from '@angular/core';
// import { sfsfs } from '../../resources/switch-plus-tab.component.js'

@Component({
  selector: 'app-switch-plus-tab',
  templateUrl: './switch-plus-tab.component.html',
  styleUrls: ['./switch-plus-tab.component.css']
})
export class SwitchPlusTabComponent {
  public chosenTab: string = 'vision';

  tabListener(tabValue: any) {
    console.log(tabValue);
    this.chosenTab = tabValue.target.textContent;
    console.log(this.chosenTab);
  }
}

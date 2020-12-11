import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  selectedTabInfo = '';
  selectedRecipieInfo = '';
  selectedFoodTrainie = '';
  constructor() { }

  ngOnInit() {
  }
  selectedIndex(ev){
    this.selectedTabInfo = ev;
    this.selectedRecipieInfo = '';
    this.selectedFoodTrainie = '';
  }
  selectedRecipie(ev) {
    this.selectedRecipieInfo = ev;
    this.selectedFoodTrainie = '';
  }
  selectedFoodTraine(ev) {
    this.selectedFoodTrainie = ev;
    this.selectedRecipieInfo = '';
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  @ViewChild(MatCalendar) _datePicker: MatCalendar<Date>
  constructor() { }

  ngOnInit() {
    this._datePicker.selectedChange.subscribe(x => {
      console.log(x);
    });
  }

}

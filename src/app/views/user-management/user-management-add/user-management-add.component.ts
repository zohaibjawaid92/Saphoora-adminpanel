import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-user-management-add',
  templateUrl: './user-management-add.component.html',
  styleUrls: ['./user-management-add.component.scss']
})
export class UserManagementAddComponent implements OnInit {
  
  displayedColumns = ['position', 'role', 'name' ,  'phone', 'email' , 'password' , 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  
  constructor() { }

  ngOnInit() {
  }

}


export interface Element {
  role : string;
  name: string;
  phone : string;
  email : string;
  password : string;
  position: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, role : 'sadasd' ,name: 'Alex', phone : '123123', email: 'zohaibjawaid92@yahoo.com' , password : '2132131' },
];

import { Component, Input, OnInit } from '@angular/core';
import { EmployeedbService } from '../employeedb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  public employees = [] as any;
  constructor(private _employeeservice: EmployeedbService) {}

  ngOnInit(): void {
    this._employeeservice
      .getEmployeesfromdb()
      .subscribe((data: any) => (this.employees = data));
    console.log('hello from header', this.employees);
  }
}

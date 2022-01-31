import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-body',
  template: `
    <h1>Employee List</h1>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }} of {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public name = 'Diptabrata';
  public greeting = '';
  public employees = [] as any;
  constructor(private _employeeservice: EmployeeserviceService) {}

  ngOnInit(): void {
    this.employees = this._employeeservice.getEmployees();
  }

  // onClick(event: any) {
  //   console.log(event);
  //   this.greeting = event.type;
  // }
}

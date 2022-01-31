import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'Ram', age: '18' },
      { id: 2, name: 'Adam', age: '28' },
      { id: 3, name: 'Sita', age: '23' },
      { id: 4, name: 'Geeta', age: '21' },
      { id: 5, name: 'Navjot', age: '19' },
      { id: 6, name: 'Arun', age: '33' },
    ];
  }
}

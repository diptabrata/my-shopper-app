import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeedbService {
  private _url: string = '/assets/data/employee.json';

  constructor(private http: HttpClient) {}

  getEmployeesfromdb(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { EmployeeserviceService } from './employeeservice.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {EmployeeDetailsComponent} from './employee/employee-details/employee-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddEmployeeComponent} from './employee/add-employee/add-employee.component';
import {PageNotFoundComponent} from './employee/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';

import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee/employee-details/employee-details.component";
import {EmployeeEditComponent} from "./employee/employee-edit/employee-edit.component";
import {AddEmployeeComponent} from "./employee/add-employee/add-employee.component";
import {PageNotFoundComponent} from "./employee/page-not-found/page-not-found.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employees/edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employees/add-new',
    component: AddEmployeeComponent
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

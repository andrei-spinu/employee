import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

import {Observable} from "rxjs";
import {Employee} from "../model/employee";
import {EmployeeInsert} from "../model/employeeInsert";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('/server/api/employees/getAll', httpOptions);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>('/server/api/employees/' + id);
  }

  editEmoployee(employee: Employee): Observable<HttpResponse<Employee>> {
    return this.httpClient.put<Employee>('/server/api/employees/' + employee.id, employee, {observe: 'response'});
  }

  addNewEmployee(employee: EmployeeInsert) {
    return this.httpClient.post<EmployeeInsert>('/server/api/employees/addOne', employee);
  }

  deleteEmployeeById(id: number){
    return this.httpClient.delete('/server/api/employees/' + id);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Employee} from "./employee";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('/server/api/employees/getAll');
  }

  getEmployeeById(id : number) : Observable<Employee>{
    return  this.httpClient.get<Employee>('/server/api/employees/'+id);
  }

  editEmoployee(employee: Employee) : Observable<HttpResponse<Employee>>{
    return this.httpClient.put<Employee>('/server/api/employees/'+  employee.id, employee, {observe: 'response'});
  }

}

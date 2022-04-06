import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(){
    return this.httpClient.get("server/api/employees/getAll");
  }

}

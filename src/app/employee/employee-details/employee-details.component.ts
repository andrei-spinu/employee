import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee: Employee;

  constructor(
    private employeeService : EmployeeService,
    private activatedRoute : ActivatedRoute,
    private router : Router) {
    this.employee = new Employee();
  }

  ngOnInit(): void {
    this.getEmployeeById(this.activatedRoute.snapshot.params['id']);
  }

  getEmployeeById(id : number)  {
    this.employeeService.getEmployeeById(id).subscribe(
      data => this.employee = data,
      error => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['employees']);
  }
}

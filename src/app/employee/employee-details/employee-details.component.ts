import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employee!: Employee;

  constructor(
    private employeeService : EmployeeService,
    private activatedRoute : ActivatedRoute,
    private router : Router) {}

  ngOnInit(): void {
    this.getEmployeeById(this.activatedRoute.snapshot.params['id']);
  }

  getEmployeeById(id : number)  {
    this.employeeService.getEmployeeById(id).subscribe(
      data => this.employee = data,
      error => console.log(error)
    );
  }

  gotoList() {
    this.router.navigate(['employees']);
  }
}

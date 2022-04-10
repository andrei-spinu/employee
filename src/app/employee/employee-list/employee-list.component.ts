import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      data => this.employees = data,
      err => console.error(err)
    );
  }

  employeeDetails(id: number) {
    this.router.navigate(['employees/details', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['employees/edit', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']).then();
      this.getEmployees();
    })


  }
}

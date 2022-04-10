import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../model/employee";
import {EmployeeService} from "../../service/employee.service";


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  id: number = -1;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(
      data => this.employee = data,
      error => console.log(error)
    );
  }

  onSubmit(){
    this.employeeService.editEmoployee(this.employee)
      .subscribe(
        data => this.goToEmployeeList(),
        error => console.log(error)
      );
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}

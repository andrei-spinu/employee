import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee!: Employee;
  employeeForm!: FormGroup;
  validMessage: string = '';
  errorArr!: [];


  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) {

  }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      }
    )
  }

  submitEmployee(): void {
    if (this.employeeForm.valid
    ) {

      console.log(this.employeeForm.value);
      this.employee = {
        id: this.activatedRoute.snapshot.params['id'],
        firstName: this.employeeForm.value.firstName,
        lastName: this.employeeForm.value.lastName,
        email: this.employeeForm.value.email,
        password: this.employeeForm.value.password
      };
      this.employeeService.editEmoployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.validMessage = 'Emoployee updated.';
          return true;
        },
        error => {
          this.errorArr = error.error.errors;
          this.errorArr.forEach(element => console.log(element));

          console.log(error);

        }
      );

    } else {
      this.validMessage = "Please fill out the details before submitting!";
    }
  }


  gotoList() {
    this.route.navigate(['employees']);
  }
}

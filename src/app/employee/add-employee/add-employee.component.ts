import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeInsert} from "../../model/employeeInsert";
import {EmployeeService} from "../../service/employee.service";
import {Employee} from "../../model/employee";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: EmployeeInsert;
  employeeForm: FormGroup;
  validMessage: string ='';


  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.employee = new Employee();
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })

  }

  ngOnInit(): void {

  }

  submitEmployee(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
      this.employee = {
        firstName: this.employeeForm.value.firstName,
        lastName: this.employeeForm.value.lastName,
        email: this.employeeForm.value.email,
        password: this.employeeForm.value.password
      };

      this.employeeService.addNewEmployee(this.employee).subscribe(
        data =>{
          console.log(data);
          this.validMessage = 'Employee added';
          return true;
        },
        error =>{
          console.log(error);
        }
      );
    } else {
      this.validMessage = "Please fill out the details before submitting!";
    }
  }

  gotoList() {
    this.router.navigate(['employees']);
  }
}

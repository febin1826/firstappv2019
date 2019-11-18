import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.scss']
})
export class EmployeedetailsComponent implements OnInit {
  id: number;
  employee= new Employee();

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
               
        data.forEach(element => {
          this.employee.empid=element["id"];
          this.employee.firstname=element["firstname"];
          this.employee.lastname=element["lastname"];
          this.employee.emailid=element["emailid"];
          this.employee.dob=element["dob"];
          this.employee.categoryid=element["categoryid"];
        });
       
        console.log(data)
        //this.employee = data as Employee;
        
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }

  }


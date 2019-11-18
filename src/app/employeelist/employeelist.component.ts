import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
employees: Observable<Employee>;
employee: Observable<Employee[]>;
category: Observable<Category[]>;
  constructor(private employeService:EmployeeService,
              private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.employee=this.employeService.getEmployeeList();
    this.employees=this.employeService.getEmployeeList();
    this.category=this.employeService.getCategoryList();
  }
  onOptionsSelected(value:number){
    console.log("the selected value is " + value);
    if(value==0)
    {
      this.employees=this.employeService.getEmployeeList();
    }
    else{
      this.employees=this.employeService.getCategory(value);
    }
   // this.category=this.employeService.getCategoryList();
  }
  employeeDetails(id: number){
    console.log("selected ID: " +id);
    this.router.navigate(['details', id]);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
 private baseUrl= 'http://localhost:63099/api';
  constructor(private http:HttpClient) { }
  getEmployeeList():Observable<any>{
    return this.http.get(this.baseUrl+'/Employee');
  }
  getCategoryList():Observable<any>{
    return this.http.get(this.baseUrl+'/category');
  }
  getCategory(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/category/'+id);
  }
  getEmployee(id: number):Observable<any>{
    return this.http.get(this.baseUrl+'/Employee/'+id);

}

}

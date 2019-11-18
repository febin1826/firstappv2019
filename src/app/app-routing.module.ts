import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductgetComponent } from './productget/productget.component';


const routes: Routes = [
 
  /*{path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'employees',component: EmployeelistComponent},
  {path:'add',component: CreateemployeeComponent},
  {path:'update/:id',component: UpdateemployeeComponent},
  {path:'details/:id',component: EmployeedetailsComponent},*/
  {path:'create',component:ProductaddComponent},
  {path:'edit/:id',component:ProducteditComponent},
  {path:'products',component:ProductgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation:'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

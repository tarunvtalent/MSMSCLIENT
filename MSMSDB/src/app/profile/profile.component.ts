import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Department } from '../Models/Department';
import { EmpService } from '../Services/emp.service';
import { DeptService } from '../Services/dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  emp:Employee;
  DeptList?:Department[];
  constructor( private empobj:EmpService,private deptobj:DeptService,
    private router:Router){
      this.emp={empid:0,name:"",gender:"",email:"",phone:"",password:"",salary:0,address:"",dpno:0};
     }

    
    ngOnInit():void{

     
      debugger
      this.empobj.getEmployeebyEmailandPassword(window.sessionStorage.getItem("email")!, window.sessionStorage.getItem("password")!).subscribe(data=> this.emp = data,error => alert(error));
    
      this.deptobj.GetAlldepartments().subscribe(data => this.DeptList =data )

  }

btnlogout(){
  window.sessionStorage.clear();
  this.router.navigate(["home"])
}
 
}

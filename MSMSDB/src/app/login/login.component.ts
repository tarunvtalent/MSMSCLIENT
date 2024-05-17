import { Component, OnInit } from '@angular/core';
import { EmpService } from '../Services/emp.service';
import { DeptService } from '../Services/dept.service';
import { Route, Router } from '@angular/router';
import { Employee } from '../Models/Employee';
import { Department } from '../Models/Department';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email?:string;
  password?:string;
  public emp:Employee;
  DeptList:Department[] =[];


  constructor (private empobj:EmpService,private Deptobj:DeptService, private router:Router){
this.emp={empid:0,name:"",gender:"",email:"",password:"",phone:"",salary:0,dpno:0,address:"",active:false}
  }
  
    ngOnInit(): void {
      this.get();
    }
  
    get():void{
    
    }
  
  
    btnlogin():void{
    //  alert("button clicked successfully");
    this.checklogin();
          
     debugger;
    if(this.emp==null || this.emp==undefined){
      this.router.navigate(["register"]);
    }
    else{
      if(this.emp.active){
        window.sessionStorage.setItem("data",this.emp.toString());
      this.router.navigate(["profile"])
      }
      else{
        this.router.navigate(["profile"])
      }
}
    }
    // btnlogin(email:any,password:any):void{
    //   debugger
      
    //   window.sessionStorage.setItem("email", email);
    //   window.sessionStorage.setItem("password", password);
    //   email + password;
    //  
  
checklogin(){
  debugger;
 setTimeout(() => {
    // this.empobj.getEmployeebyEmailandPassword(this.email,this.password).subscribe(data=>console.log(data) ,error => alert(error));
    this.empobj.getEmployeebyEmailandPassword(this.email,this.password).subscribe((data:any)=>this.emp=data);
  
  }, 1000);
}
}

import { Component } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmpService } from '../Services/emp.service';
import { DeptService } from '../Services/dept.service';
import { Router } from '@angular/router';
import { Department } from '../Models/Department';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Emp:Employee;
  DeptList?:Department[];

  constructor( private empobj:EmpService,private deptobj:DeptService,
    private router:Router){
      this.Emp={empid:0,name:"",password:"",gender:"",email:"",salary:0,address:"",dpno:0,phone:""};     }

    Validation():boolean{
      if(this.Emp.name==""){
        alert("please enter Employee name");
        return false;
      }
      else if(this.Emp.password==""){
        alert("please enter password");    
        return false;   
      }
      else if(this.Emp.gender==""){
        alert("please enter gender");
        return false;
      }
      else if(this.Emp.email==""){
        alert("please enter Email...!");
        return false;
      }
      else if(this.Emp.salary==0){
        alert("please enter salary");
        return false;
      }
      else if(this.Emp.address==""){
        alert("please enter address");
        return false;
      }
      else if(this.Emp.dpno==0){
        alert("please enter Department");
        return false;
      }
      else if(this.Emp.phone==""){
        alert("please enter Phone Number");
        return false;
      }
      return true;
    }
    
 

    ngOnInit():void{
      this.deptobj.GetAlldepartments().subscribe(data=>this.DeptList=data,error => alert(error));
    }
    

   

  btnRegister():void{
debugger;

if (this.Validation()){
  this.Emp.name = this.Emp.name 
  this.Emp.password=this.Emp.password
  this.Emp.gender=this.Emp.gender
  this.Emp.email=this.Emp.email
  this.Emp.phone=this.Emp.phone
  this.Emp.active= JSON.parse('false')
  this.Emp.salary= parseInt(this.Emp.salary!.toString());
  this.Emp.address=this.Emp.address
  this.Emp.empid=parseInt(this.Emp.empid!.toString())
  this.Emp.dpno=parseInt(this.Emp.dpno!.toString());
  this.empobj.InsertEmployee(this.Emp).subscribe(data=>alert(data + "Record inserted Successfully...!"));
  alert("Record Inserted Successfully");
  this.router.navigate(["home"]).then(() =>{
    window.location.reload();
  });
}  
}

btncancel(){
  this.router.navigate(["home"])
}
}

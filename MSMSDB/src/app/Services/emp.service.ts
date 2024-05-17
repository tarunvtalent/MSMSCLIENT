import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  APIBasicURL="http://localhost:34968/api/EmpWebApi/";

  public  httpOptions = {
   headers :new HttpHeaders({
     'Content-Type': 'application/json'
     
 
   })
  }
  
   constructor(private http:HttpClient) {}  
 
     GetAllemployees():Observable<Employee[]>{
       return this.http.get<Employee[]>(this.APIBasicURL+"AllEmployees");
    }
   
   InsertEmployee(emp:Employee):Observable<string>{
     
     return this.http.post<string>(this.APIBasicURL+"InsertEmployee",emp , this.httpOptions)
                    .pipe(catchError(this.httpErrorHandler));
   }
   
     
   UpdateEmployee(emp:Employee):Observable<string>{
   
     return this.http.put<string>("http://localhost:34968/api/EmpWebApi/UpdateEmployees",emp , this.httpOptions)
                           .pipe(catchError(this.httpErrorHandler));
   }   
   
   DeleteEmployee(empid:any):Observable<string>{
     debugger;
     return this.http.delete<string>("http://localhost:34968/api/EmpWebApi/DeleteEmployee?empid="+empid, this.httpOptions)
                           .pipe(catchError(this.httpErrorHandler));
   }
 
     
   GetEmployeeByEmpId(empid:any):Observable<Employee>{
     debugger;
     return this.http.get<Employee>(this.APIBasicURL+"GetEmployeeByEmpId?EmpID="+empid)
                           .pipe(catchError(this.httpErrorHandler));
   }
 
   getEmployeestatus(email:any):Observable<Employee>{
     return this.http.get<Employee>(this.APIBasicURL+"GetemployeebyemailReturnsbool?email="+email)
                          .pipe(catchError(this.httpErrorHandler));
   }
 
   getEmployeebyEmailandPassword(email:any,password:any):Observable<Employee>{
     debugger;
     return this.http.get<Employee>(this.APIBasicURL+ "GetEmployeebyemailandpassword?email="+email+ "&password=" + password)
                     .pipe(catchError(this.httpErrorHandler));
   } 
  
 
 
 Isloggedin(){
   return localStorage.getItem('token');!null
 }
 
   httpErrorHandler(error:HttpErrorResponse){
     return throwError(error.message || "Server Error")
 }
 
}

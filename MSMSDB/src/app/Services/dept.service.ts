import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Models/Department';

@Injectable({
  providedIn: 'root'
})
export class DeptService {



  constructor(private http:HttpClient) { }

  GetAlldepartments():Observable<Department[]>{
 return this.http.get<Department[]>("http://localhost:34968/api/DeptWebApi/Alldepartments")
  }



}

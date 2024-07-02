import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  //baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://localhost:7069/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>('https://localhost:7069/api/employees', addEmployeeRequest)
  } 

  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>('https://localhost:7069/api/employees/'+id)
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {
    return this.http.put<Employee>('https://localhost:7069/api/employees/'+id, updateEmployeeRequest)
  }

  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>('https://localhost:7069/api/employees/'+id)
  }
}

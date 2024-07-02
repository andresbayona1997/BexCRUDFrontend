import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { NgFor, NgIf } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit{
  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService){}
 
 
  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        console.log(employees);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }


}

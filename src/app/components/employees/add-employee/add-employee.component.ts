import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee.model';
import { EmployeesService } from '../../../services/employees.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    position: '',
    department: '',

  };

  /**
   *
   */
  constructor(private emploteeService: EmployeesService, private router:Router) {
    
  }

  addEmployee() {
    this.emploteeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['employees'])
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{

  employeeDetails: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    position: '',
    department: '',

  }
  /**
   *
   */
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
        }
      }
    })
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) =>{
        this.router.navigate(['employees']);
      }
    })
  }

}

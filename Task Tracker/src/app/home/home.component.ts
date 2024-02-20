import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,FooterComponent,RouterModule,HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public user = {
    Task_Name:"",
    Category:"",
    Priority:"",
    Task_Description:"",
    Deadline:"",
    Task_Status:"",
    Token:localStorage.getItem('token')
  }

constructor(public http:HttpClient, public router: Router){
  if(!localStorage.getItem('token')){
    router.navigate(['/login'])
  }
}
  ngOnInit(): void {

     }

     submit_data() {
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      this.http
        .post<any>(
          'http://localhost/codeSchool/Task_Tracker/Api/task.php',
          {
     Task_Name:this.user.Task_Name,
    Category:this.user.Category,
    Priority:this.user.Priority,
    Task_Description:this.user.Task_Description,
    Deadline:this.user.Deadline,
    Task_Status:this.user.Task_Status,
    Token:localStorage.getItem('token')

          },
          { headers }
        )
        .subscribe({
          next: (response) => {
            alert(response.message);
            if (response.status == true) {






            } else {


              alert("Error");

            }

          },
          error: (error) => {
            alert(error.error.message); // Assuming error response has a message
            this.router.navigate(['/']); // Navigate back to registration
          },
        });
    }
}

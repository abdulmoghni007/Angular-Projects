import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,RouterLinkActive, HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public user = {
  Email: "",
  Password: ""
  }

constructor(public http:HttpClient, public router: Router){
  if(localStorage.getItem('token')){
    router.navigate(['/'])
  }
}
  ngOnInit(): void {

     }

     submit_data() {
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

      let Password = this.user.Password;
      let Email = this.user.Email;


      this.http
        .post<any>(
          'http://localhost/codeSchool/Task_Tracker/Api/login.php',
          {

            Email: this.user.Email,
            Password: this.user.Password
          },
          { headers }
        )
        .subscribe({
          next: (response) => {
            alert(response.message);
            if (response.status == true) {

              localStorage.setItem('token', response.data)
              this.router.navigate(['/']);

alert("Login Successfull");

            } else {


              alert("Error in login");

            }

          },
          error: (error) => {
            alert(error.error.message); // Assuming error response has a message
            this.router.navigate(['/']); // Navigate back to registration
          },
        });
    }
}





























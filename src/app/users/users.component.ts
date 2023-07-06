import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

class Registration {
  id: number=0;
  firstname: string="";
  lastname: string="";
  department: string="";
  username: string="";
  password: string="";
  passwordagain: string="";
  email: string="";
  contact: string="";
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  registrations: Registration[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  this.genrate();}

    genrate():void{
    this.http.get<Registration[]>('http://localhost:8080/Users')
      .subscribe(
        response => {
          this.registrations = response;
          console.log(this.registrations);
        },
        error => {
          console.log(error);
        }
      );
  }
    deleteUser(userId: number) {
    console.log("deleting button works");
      this.http.delete(`http://localhost:8080/Users/${userId}`).subscribe(
        () => {
          console.log('User deleted successfully');
          this.genrate();
          // Perform any additional actions after successful deletion
        },
        (error) => {
          console.log('Error deleting user:', error);
          // Handle any error that occurs during deletion
        }
      );
    }
}

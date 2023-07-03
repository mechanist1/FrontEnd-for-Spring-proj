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
    this.http.get<Registration[]>('http://localhost:8080/Registration')
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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'signup-home',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 firstname: string = "";
 lastname: string = "";
 department: string = "";
 username: string = "";
 password: string = "";
 passwordagain: string = "";
 email: string = "";
 contact: string = "";

 test:string="";

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  signup(): void {

    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      department: this.department,
      username: this.username,
      password: this.password,
      passwordagain: this.passwordagain,
      email: this.email,
      contact: this.contact
    };



    this.http.post('http://localhost:8080/Registration',data, { responseType: 'text' })
      .subscribe(
        response => {

          console.log("the Firstname  is: ",response);
        },
        error => {
          console.log(error);
        }
      );
  }
}

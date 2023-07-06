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

 username: string = "";
 password: string = "";
 passwordagain: string = "";
 email: string = "";




  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  signup(): void {

    const data1 = {

      username: this.username,
      password: this.password,
      passwordagain: this.passwordagain,
      email: this.email,

    };



    this.http.post('http://localhost:8080/signup',data1, { responseType: 'text' })
      .subscribe(
        response => {

          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}

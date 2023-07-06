import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'signin-home',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


 email: string = "";

 password: string = "";





  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void { }

  signin(): void {

    const data2 = {

      password: this.password,

      email: this.email,}




    this.http.post('http://localhost:8080/signin',data2, { responseType: 'text' })
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent implements OnInit {
  poster: string = "";
  post: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void { }


print():void{
console.log("hello")
console.log(this.poster)}
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { UsersComponent } from './users/users.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
const routes: Routes = [{path:'',component: HomeComponent},
                       {path:'apitesting',component: ApiTestingComponent},
                       {path:'users',component : UsersComponent},
                       {path:'signup',component: SignupComponent},
                       {path:'signin',component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

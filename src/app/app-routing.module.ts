import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',component: HomeComponent},
                       {path:'apitesting',component: ApiTestingComponent},
                       {path:'users',component : UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

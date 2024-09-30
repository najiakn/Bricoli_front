import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authe/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { LanceSvComponent } from './home/home/lancer_service/lance-sv/lance-sv.component';



const routes: Routes = [
//  { path: '', redirectTo: "/login", pathMatch: 'full' },
 { path: '', redirectTo: "/home", pathMatch: 'full' },

{ path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'lancerService', component: LanceSvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

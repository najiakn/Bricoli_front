import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './authe/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Combined import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanceSvComponent } from './home/home/lancer_service/lance-sv/lance-sv.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register/register.component';
import { ListeServiceComponent } from './home/home/liste_service/list-service/list-service.component';
import { ListeTypeServiceComponent } from './home/home/type-service/liste-type-service/liste-type-service.component';
import { CreatTypeServiceComponent } from './home/home/type-service/creat-type-service/creat-type-service.component';
// Import ListServiceComponent here if it exists

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LanceSvComponent,
    ListeServiceComponent,
    ListeTypeServiceComponent,
    CreatTypeServiceComponent
    // ListServiceComponent, // Uncomment and import it if you have this component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

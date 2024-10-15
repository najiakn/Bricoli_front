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
import { ModifierServiceComponent } from './home/home/modifier-service/modifier-service/modifier-service.component';
import { ClientHomeComponent } from './clientSection/client-home/client-home/client-home.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { RegisterClientComponent } from './clientSection/registerClient/register-client/register-client.component';
import { LancerOffreComponent } from './clientSection/lancer-offre/lancer-offre/lancer-offre.component';
import { ListerOffreComponent } from './clientSection/lister-offre/lister-offre/lister-offre.component';
import { ModifierOffreComponent } from './clientSection/modifier-offre/modifier-offre/modifier-offre.component';
import { AdminHomeComponent } from './adminSection/AdminHome/admin-home/admin-home.component';
import { AdminRegisterComponent } from './adminSection/admin-register/admin-register/admin-register.component';
import { AdminServiceComponent } from './adminSection/admin-service/admin-service/admin-service.component';
import { ComptePresComponent } from './home/home/compte-pres/compte-pres/compte-pres.component';
import { ModifierCompteComponent } from './home/home/modifier-compte/modifier-compte/modifier-compte/modifier-compte.component';
import { ClientCompteComponent } from './clientSection/client-home/client-home/client-compte/client-compte/client-compte/client-compte.component';
import { ModifierClientComponent } from './clientSection/client-home/modifier-client/modifier-client/modifier-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LanceSvComponent,
    ListeServiceComponent,
    ListeTypeServiceComponent,
    CreatTypeServiceComponent,
    ModifierServiceComponent,
    ClientHomeComponent,
    AccueilComponent,
    RegisterClientComponent,
    LancerOffreComponent,
    ListerOffreComponent,
    ModifierOffreComponent,
    AdminHomeComponent,
    AdminRegisterComponent,
    AdminServiceComponent,
    ComptePresComponent,
    ModifierCompteComponent,
    ClientCompteComponent,
    ModifierClientComponent,


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

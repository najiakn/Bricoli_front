import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authe/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { LanceSvComponent } from './home/home/lancer_service/lance-sv/lance-sv.component';
import { CommonModule } from '@angular/common';
import { ListeServiceComponent } from './home/home/liste_service/list-service/list-service.component';
import { ListeTypeServiceComponent } from './home/home/type-service/liste-type-service/liste-type-service.component';
import { ModifierServiceComponent } from './home/home/modifier-service/modifier-service/modifier-service.component';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { RegisterClientComponent } from './clientSection/registerClient/register-client/register-client.component';
import { ClientHomeComponent } from './clientSection/client-home/client-home/client-home.component';
import { LancerOffreComponent } from './clientSection/lancer-offre/lancer-offre/lancer-offre.component';
import { ListerOffreComponent } from './clientSection/lister-offre/lister-offre/lister-offre.component';
import { ModifierOffreComponent } from './clientSection/modifier-offre/modifier-offre/modifier-offre.component';
import { AdminHomeComponent } from './adminSection/AdminHome/admin-home/admin-home.component';
import { AdminRegisterComponent } from './adminSection/admin-register/admin-register/admin-register.component';
import { ComptePresComponent } from './home/home/compte-pres/compte-pres/compte-pres.component';
import { ModifierCompteComponent } from './home/home/modifier-compte/modifier-compte/modifier-compte/modifier-compte.component';
import { ClientCompteComponent } from './clientSection/client-compte/client-compte.component';
import { ModifierClientComponent } from './clientSection/modifier-client/modifier-client/modifier-client.component';
import { AdminServiceComponent } from './adminSection/admin-service/admin-service/admin-service.component';
import { AdminModifierServiceComponent } from './adminSection/admin-modifier-service/admin-modifier-service/admin-modifier-service.component';
import { AdminOffreComponent } from './adminSection/admin-offre/admin-offre/admin-offre.component';
import { AdminModifierOffreComponent } from './adminSection/admin-modifier-offre/admin-modifier-offre/admin-modifier-offre.component';
import { AdminListClientComponent } from './adminSection/admin-list-client/admin-list-client/admin-list-client.component';
import { AdminModifierClientComponent } from './adminSection/admin-modifier-client/admin-modifier-client/admin-modifier-client.component';



const routes: Routes = [
  //  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: '', redirectTo: "/Accueil", pathMatch: 'full' },

  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lancerService', component: LanceSvComponent },
  { path: 'listeService', component: ListeServiceComponent },

  { path: 'listeTypeService', component: ListeTypeServiceComponent },

  { path: 'ModifierService/:id', component: ModifierServiceComponent },
  { path: 'Accueil', component: AccueilComponent },
  { path: 'RegisterClient', component: RegisterClientComponent },
  { path: 'ClientHome', component: ClientHomeComponent },
  { path: 'LancerOffre', component: LancerOffreComponent },
  { path: 'ListerOffre', component: ListerOffreComponent },
  { path: 'ModifierOffre/:id', component: ModifierOffreComponent },

  { path: 'ListerOffre', component: ListerOffreComponent },
  { path: 'AdminHome', component: AdminHomeComponent },
  { path: 'AdminRegister', component: AdminRegisterComponent },
  { path: 'AdminService', component: AdminServiceComponent },

  { path: 'ComptePres', component: ComptePresComponent },
  { path: 'ClientCompte', component: ClientCompteComponent },
  { path: 'Modifierclient/:id', component: ModifierClientComponent },

  { path: 'ModifierCompte/:id', component: ModifierCompteComponent },

  { path: 'AdminModifierService/:id', component: AdminModifierServiceComponent },
  { path: 'AdminOffre', component: AdminOffreComponent },
  { path: 'AdminModifierOffre/:id', component: AdminModifierOffreComponent },
  { path: 'AdminListClient', component: AdminListClientComponent },
  { path: 'AdminModifierClient/:id', component: AdminModifierClientComponent },
















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from 'src/app/models/ModelService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css'],

})
export class ClientHomeComponent implements OnInit {
  modelService: ModelService[] = [];
  errorMessage: string = '';
  nomProjet: string | undefined;


  constructor(private serviceModelservice: ServiceModelServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.loadServiceModel();
  }
  check = false;


  loadServiceModel(): void {
    this.serviceModelservice.allServiceClient().subscribe(
      (data: ModelService[]) => {
        this.modelService = data;
        console.log(data);

      },
      (error: any) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des projets.';
      }
    );
  }
  logout() {
    this.serviceModelservice.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }





}

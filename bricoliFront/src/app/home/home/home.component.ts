import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';
import { ModelService } from 'src/app/models/ModelService';

interface Service {
  id: number;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modelService: ModelService[] = [];
  errorMessage: string = '';
nomProjet: string | undefined;


  constructor(private serviceModelservice: ServiceModelServiceService,
              private router: Router ) {}


  ngOnInit(): void {
          this.loadServiceModel();
                  }


  loadServiceModel(): void {
    this.serviceModelservice.allProjets().subscribe(
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
            

}


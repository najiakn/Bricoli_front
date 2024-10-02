import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeService } from 'src/app/models/TypeService';
import { TypeServiceService } from 'src/app/Services/type-service.service';

@Component({
  selector: 'app-liste-type-service',
  templateUrl: './liste-type-service.component.html',
  styleUrls: ['./liste-type-service.component.css']
})
export class ListeTypeServiceComponent implements OnInit {
  newTypeName: string = '';
  serviceTypes: TypeService[] = [];
  private apiUrl = 'http://localhost:8083/api/typeServices'; // Adjust this URL as needed
  typemodel: TypeService[] = [];
  errorMessage: string = '';
  isError: boolean = false;

  constructor(private typeserviceservice: TypeServiceService,
              private router: Router ) {}

  ngOnInit() {
    this.loadTypeService();
  }

  loadTypeService(): void {
    this.typeserviceservice.allTypeServices().subscribe(
      (data: TypeService[]) => {
        this.serviceTypes = data;
        console.log(data);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des projets', error);
        this.errorMessage = 'Une erreur est survenue lors du chargement des projets.';
        this.isError = true;
      }
    );
  }

  addServiceType(): void {
    this.isError = false;
    this.errorMessage = '';

    if (this.newTypeName.trim()) {
      const newType: TypeService = {
        id: 0,
        nomType: this.newTypeName.trim()
      };
  
      this.typeserviceservice.addTypeService(newType).subscribe(
        (addedType: TypeService) => {
          console.log('Nouveau type de service ajouté:', addedType);
          this.serviceTypes.push(addedType);
          this.newTypeName = ''; // Clear the input field
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout du type de service', error);
          this.errorMessage = error.message || 'Une erreur est survenue lors de l\'ajout du type de service.';
          this.isError = true;
        }
      );
    }
  }
}

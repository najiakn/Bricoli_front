import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelService } from 'src/app/models/ModelService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';

@Component({
  selector: 'app-lister-offre',
  templateUrl: './lister-offre.component.html',
  styleUrls: ['./lister-offre.component.css']
})
export class ListerOffreComponent {
  modelService: ModelService[] = [];
  errorMessage: string = '';


  constructor(private serviceModelservice: ServiceModelServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.loadCategoriServices();
  }


  loadCategoriServices(): void {
    this.serviceModelservice.allServices().subscribe(
      (data: ModelService[]) => {

        this.modelService = data;

      },

      (error) => {
        console.error('Error fetching services:', error);
      });
  }

  onDeleteService(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce service ?')) {
      this.serviceModelservice.deleteService(id).subscribe(
        () => {
          // Filtrer la liste pour supprimer le service supprimé localement
          this.modelService = this.modelService.filter(service => service.id !== id);
          console.log('Service supprimé avec succès');
        },
        error => {
          console.error('Erreur lors de la suppression du service', error);
        }
      );
    }
  }
  modifierOffre(id: number): void {
    this.router.navigate(['/ModifierOffre', id]); // Navigate to the modification form
  }

  logout() {
    this.serviceModelservice.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestataire } from 'src/app/models/Prestataire';
import { PrestataireServiceService } from 'src/app/Services/prestataire-service.service';

@Component({
  selector: 'app-compte-pres',
  templateUrl: './compte-pres.component.html',
  styleUrls: ['./compte-pres.component.css']
})
export class ComptePresComponent implements OnInit {
  prestataire: Prestataire[] = [];
  errorMessage: string = '';


  constructor(private prestataireService: PrestataireServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.loadComptePrestataire();
  }

  loadComptePrestataire(): void {
    this.prestataireService.getMyInfos().subscribe(
      (data: Prestataire[]) => {
        console.log(data); // Vérifiez ici la structure des données
        this.prestataire = data;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }
  


  logout() {
    this.prestataireService.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }

  modifiecompte(id: number): void {
    this.router.navigate(['/ModifierCompte', id]); // Navigate to the modification form
  }
}
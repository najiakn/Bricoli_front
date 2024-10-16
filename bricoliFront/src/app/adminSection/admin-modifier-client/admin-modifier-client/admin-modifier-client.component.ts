import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Clinet';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-admin-modifier-client',
  templateUrl: './admin-modifier-client.component.html',
  styleUrls: ['./admin-modifier-client.component.css']
})
export class AdminModifierClientComponent  implements OnInit {
  client: Client[] = [];
  errorMessage: string = '';


  constructor(private clientService: ClientServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.loadCompteClient();
  }

  loadCompteClient(): void {
    this.clientService.getMyInfos().subscribe(
      (data: Client[]) => {
        console.log(data); // Vérifiez ici la structure des données
        this.client = data;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }



  logout() {
    this.clientService.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }

  modifierclient(id: number): void {
    this.router.navigate(['/Modifierclient', id]); // Navigate to the modification form
  }
}
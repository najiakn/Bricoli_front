import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Clinet';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-admin-list-client',
  templateUrl: './admin-list-client.component.html',
  styleUrls: ['./admin-list-client.component.css']
})
export class AdminListClientComponent  implements OnInit {
  client: Client[] = [];
  errorMessage: string = '';


  constructor(private clientservice: ClientServiceService,
    private router: Router) { }


  ngOnInit(): void {
    this.loadCompteClient();
  }


  loadCompteClient(): void {
    this.clientservice.allClients().subscribe(
      (data: Client[]) => {

        this.client = data;

      },

      (error) => {
        console.error('Error fetching services:', error);
      });
  }

 

  
  modifierClient(id: number): void {
    this.router.navigate(['/AdminModifierClient', id]); // Navigate to the modification form
  }

  logout() {
    this.clientservice.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Clinet';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-admin-modifier-client',
  templateUrl: './admin-modifier-client.component.html',
  styleUrls: ['./admin-modifier-client.component.css']
})
export class AdminModifierClientComponent implements OnInit {
  client: Client = {} as Client; // Initialize the prestataire object
  modificationForm: FormGroup; // Form group for handling the update form
  clientId: number | undefined; // To store the prestataire's ID

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientservice: ClientServiceService,
    private fb: FormBuilder
  ) {
    // Initialize the form with validation
    this.modificationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [0, [Validators.required]],
      genre: ['', Validators.required],
      telephone: ['', Validators.required],
      cnie: ['', Validators.required],
      ville: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    // Get the prestataire ID from the route parameters
    this.route.params.subscribe(params => {
      this.clientId = params['id']; // Assuming 'id' is the route parameter
      if (this.clientId) {
        this.loadClient();
      }
    });
  }

  // Method to load the prestataire details based on the ID
  loadClient(): void {
    if (this.clientId) {
      this.clientservice.getMyInfos().subscribe(
        (client: Client[]) => {
          if (client.length > 0) {
            this.client = client[0]; // Assuming you're editing a single prestataire
            this.modificationForm.patchValue(this.client); // Populate the form with the current values
          }
        },
        error => {
          console.error('Error loading prestataire:', error);
        }
      );
    }
  }

  // Method to update the prestataire
  onSubmit(): void {
    if (this.modificationForm.valid && this.clientId) {
      // Get the updated values from the form
      const updatedClient: Client = this.modificationForm.value;

      // Call the update service method
      this.clientservice.updateClient(this.clientId, updatedClient).subscribe(
        (response: Client) => {
          console.log('Prestataire updated successfully:', response);
          // After successful update, redirect to the 'ComptePres' page
          this.router.navigate(['/AdminListClient']);
        },
        (error) => {
          console.error('Error updating Client:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }


  logout() {
    this.clientservice.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }
}


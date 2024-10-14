import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestataire } from 'src/app/models/Prestataire';
import { PrestataireServiceService } from 'src/app/Services/prestataire-service.service';

@Component({
  selector: 'app-modifier-compte',
  templateUrl: './modifier-compte.component.html',
  styleUrls: ['./modifier-compte.component.css']
})
export class ModifierCompteComponent implements OnInit {
  prestataire: Prestataire = {} as Prestataire; // Initialize the prestataire object
  modificationForm: FormGroup; // Form group for handling the update form
  prestataireId: number | undefined; // To store the prestataire's ID

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prestataireService: PrestataireServiceService,
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

      zoneDeplacement: ['', Validators.required],
      ville: ['', Validators.required],

    });
  }

  ngOnInit(): void {
    // Get the prestataire ID from the route parameters
    this.route.params.subscribe(params => {
      this.prestataireId = params['id']; // Assuming 'id' is the route parameter
      if (this.prestataireId) {
        this.loadPrestataire();
      }
    });
  }

  // Method to load the prestataire details based on the ID
  loadPrestataire(): void {
    if (this.prestataireId) {
      this.prestataireService.getMyInfos().subscribe(
        (prestataire: Prestataire[]) => {
          if (prestataire.length > 0) {
            this.prestataire = prestataire[0]; // Assuming you're editing a single prestataire
            this.modificationForm.patchValue(this.prestataire); // Populate the form with the current values
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
    if (this.modificationForm.valid && this.prestataireId) {
      // Get the updated values from the form
      const updatedPrestataire: Prestataire = this.modificationForm.value;

      // Call the update service method
      this.prestataireService.updatePrestataire(this.prestataireId, updatedPrestataire).subscribe(
        (response: Prestataire) => {
          console.log('Prestataire updated successfully:', response);
          // After successful update, redirect to the 'ComptePres' page
          this.router.navigate(['/ComptePres']);
        },
        (error) => {
          console.error('Error updating prestataire:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}

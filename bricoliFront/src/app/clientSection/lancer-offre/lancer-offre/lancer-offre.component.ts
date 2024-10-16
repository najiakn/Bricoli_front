import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypePaiement } from 'src/app/models/TypePaiement';
import { TypeService } from 'src/app/models/TypeService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';
import { UploadImage } from 'src/app/Services/UploadImage';

@Component({
  selector: 'app-lancer-offre',
  templateUrl: './lancer-offre.component.html',
  styleUrls: ['./lancer-offre.component.css']
})
export class LancerOffreComponent implements OnInit {
  serviceForm: FormGroup;
  selectedFile: File | null = null;
  typeServices: TypeService[] = [];
  typePaiements = Object.values(TypePaiement);
  imageUrl: String | null = null;
  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceModelServiceService,
    private uploadService: UploadImage,
    private route: Router,
  ) {
    this.serviceForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      idType: ['', Validators.required],
      typePaiement: [TypePaiement.EN_LIGNE, Validators.required],
      imageUrl: [''],
      dateCreation: [Date.now()],
      etatService: ['NON_ENCOUR'],
      categorie: ['OFFRE'],
    });
  }

  ngOnInit(): void {
    this.loadTypeServices();
  }

  loadTypeServices(): void {
    this.serviceService.getTypeServices().subscribe(
      (types: TypeService[]) => {
        this.typeServices = types;
      },
      (error) => {
        console.error('Error fetching service types:', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
  }

  async onSubmit() {
    if (this.serviceForm.valid) {
      const formData = this.serviceForm.value;
      console.log('Form Data:', this.serviceForm.value);

      formData.imageUrl = await this.uploadService.uploadImageToCloudinary(formData.imageUrl);

      console.log('Form Data after:', formData);
      formData

      this.serviceService.createOffre(formData).subscribe(
        data => {
          console.log('Automobiliste created successfully:', data);
          this.route.navigate(['/ClientHome']);
        }
      )

    }
  }

  onFileSelected(event: any, controlName: string): void {
    const file = event.target.files[0];
    if (file && file.type.match(/image\/*/) != null) {
      const previewUrl = URL.createObjectURL(file);
      this.serviceForm.patchValue({
        [controlName]: file
      });
      this.serviceForm.get(controlName)?.markAsTouched();
      this.imageUrl = previewUrl;
    } else {
      alert('Veuillez sélectionner une image valide');
    }
  }
  onCancel(): void {
    this.serviceForm.reset();
    this.selectedFile = null;
    // Optionally, reset typeServices or handle other cancellation logic
  }
  logout() {
    this.serviceService.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }

}

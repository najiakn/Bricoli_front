import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelService } from 'src/app/models/ModelService';
import { TypePaiement } from 'src/app/models/TypePaiement';
import { TypeService } from 'src/app/models/TypeService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';
import { UploadImage } from 'src/app/Services/UploadImage';

@Component({
  selector: 'app-admin-modifier-service',
  templateUrl: './admin-modifier-service.component.html',
  styleUrls: ['./admin-modifier-service.component.css']
})
export class AdminModifierServiceComponent implements OnInit {
  service: ModelService = {} as ModelService; // Initialize service object
  typeServices: TypeService[] = [];
  serviceForm: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string | null = null; // Initialize as null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceModelService: ServiceModelServiceService,
    private uploadImageService: UploadImage, // Inject the upload service
    private fb: FormBuilder
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
      categorie: ['SERVICE'],
    });
  }

  // Select an image
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result; // Set the imageUrl to the file's URL
      };
      reader.readAsDataURL(this.selectedFile); // Read the selected file
    }
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get ID from the route
    if (id) {
      this.serviceModelService.getServiceById(+id).subscribe((data) => {
        this.service = data; // Populate service object with data
        this.imageUrl = this.service.imageUrl ?? null; // Use null if imageUrl is undefined
      });
    }

    this.serviceModelService.getTypeServices().subscribe((data) => {
      this.typeServices = data; // Get type services for dropdown
    });
  }

  // Submit the form
  onSubmit(): void {
    if (this.selectedFile) {
      // Upload image to Cloudinary (or your preferred service)
      this.uploadImageService.uploadImageToCloudinary(this.selectedFile).then((imageUrl: string) => {
        console.log('Image URL:', imageUrl); // Log the image URL
        this.service.imageUrl = imageUrl; // Update the service object with the new image URL
        this.updateService();
      }).catch(error => {
        console.error('Error uploading image:', error);
      });
    } else {
      this.updateService(); // Proceed without an image
    }
  }

  // Update the service
  updateService(): void {
    this.serviceModelService.updateService(this.service).subscribe(() => {
      this.router.navigate(['/AdminService']); // Navigate back to service list after modification
    }, error => {
      console.error('Error updating service:', error);
    });
  }
  logout() {
    this.serviceModelService.logout();
    // Optional: redirect to the login page or refresh the app
    window.location.reload(); // or use Angular Router
  }
}

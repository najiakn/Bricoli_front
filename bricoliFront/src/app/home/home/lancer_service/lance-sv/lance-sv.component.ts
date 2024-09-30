import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Categorie } from 'src/app/models/categorie';
import { ModelService } from 'src/app/models/ModelService';
import { TypePaiement } from 'src/app/models/TypePaiement';
import { TypeService } from 'src/app/models/TypeService';
import { ServiceModelServiceService } from 'src/app/Services/service-model-service.service';
import { UploadImage } from 'src/app/Services/UploadImage';

@Component({
  selector: 'app-lance-sv',
  templateUrl: './lance-sv.component.html',
  styleUrls: ['./lance-sv.component.css']
})
export class LanceSvComponent implements OnInit {
  serviceForm: FormGroup;
  selectedFile: File | null = null;
  typeServices: TypeService[] = [];
  typePaiements = Object.values(TypePaiement);
  imageUrl: String |null=null;
  constructor(
    private fb: FormBuilder,
    private serviceService: ServiceModelServiceService,
   private   uploadService:UploadImage,
   private route:Router
  ) {
    this.serviceForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      prix: [0, [Validators.required, Validators.min(0)]],
      typeService: ['', Validators.required],
      typePaiement: [TypePaiement.EN_LIGNE, Validators.required],
      imageUrl:['']
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

      this.serviceService.createService(formData).subscribe(
        data => {
          console.log('Automobiliste created successfully:', data);
          this.route.navigate(['/HOME']);
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
}
